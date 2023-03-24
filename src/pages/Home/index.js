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
const PLANETS_API_URL = "https://swapi.dev/api/planets/"

export default function Home() {
    let { pageId } = useParams()
    pageId = Number(pageId)

    const [currentPage, setCurrentPage] = useState(pageId)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [postsCount, setPostsCount] = useState(2)
    const [peopleId, setPeopleId] = useState(0)

    console.log(posts)
    if (typeof (pageId) !== 'number') {
        setCurrentPage(1)
    } else if (pageId > 9) {
        console.log("WTF!!!!!")
    }
    useEffect(() => {
        const data = JSON.parse(getSavedData(currentPage))
        async function fetchData() {
            if (data === 0) {
                try {
                    console.log(data)
                    // data = await enhancedFetchTest(PEOPLE_API_URL + '?page=' + currentPage)
                    const res = await axios.get(`${PEOPLE_API_URL}?page=${currentPage}`)
                    data = res.data
                    console.log(data)
                    setPosts(data.results)
                    setPostsCount(data.count)
                    setPeopleId((currentPage * 10) - 9)
                    setLoading(true)
                    saveData(currentPage, data)
                } catch (err) {
                    setHasError(true)
                } finally {
                    setLoading(false)
                }
                console.log(data)
            } else {
                setPosts(data.results)
                setPostsCount(data.count)
                setPeopleId((currentPage * 10) - 9)
                setLoading(true)
        }}
            fetchData()
    }, [currentPage])

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
                {renderPosts(posts, loading, hasError, peopleId)}
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
