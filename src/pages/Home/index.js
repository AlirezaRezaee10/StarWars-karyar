import React from 'react'
import './style.css'

import { Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { enhancedFetchTest } from '../../services/http/http'
import { renderPosts } from '../PostRender'
import Pagination from '../../components/Pagination'
import { getSavedData, saveData } from '../../services/http/Storage'
import axios from 'axios'

const PEOPLE_API_URL = "https://swapi.dev/api/people/"

export default function Home() {
    let { pageId } = useParams()
    pageId = Number(pageId)

    const [currentPage, setCurrentPage] = useState(pageId)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [postsCount, setPostsCount] = useState(2)
    const [peopleId, setPeopleId] = useState(0)


    useEffect(() => {
        async function fetchData() {
            let data = JSON.parse(getSavedData(currentPage));
            if (!data) {
              try {
                const response = await axios.get(`${PEOPLE_API_URL}?page=${currentPage}`);
                data = response.data;
                saveData(currentPage, data);
              } catch (err) {
                setErrMessage(err.response.status + ' ' + err.response.statusText)
                setHasError(true);
                setLoading(false)
              }
            }
            setPosts(data.results);
            setPostsCount(data.count);
            setPeopleId((currentPage * 10) - 9);
            setLoading(false);
          }
      
          fetchData();
      }, [currentPage]);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        setHasError(false)
    }

    const nextPage = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
    }
    const prevPage = (pageNumber) => {
        setCurrentPage(pageNumber - 1)
    }

    return (
        <div className='text-center'>
            <div className='home-items p-3 w-100 row justify-content-center'>
                {renderPosts(posts, loading, hasError, peopleId, errMessage)}
            </div>
            <Pagination
                postsPerPage={10}
                totalPosts={postsCount}
                currentPage={currentPage}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
                error={hasError}
            />
        </div>
    )
}
