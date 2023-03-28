import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { characterDetails } from '../PostRender'
import { enhancedFetchTest } from '../../services/http/http'
import { getSavedData, saveData } from '../../services/http/Storage'

const PEOPLE_API_URL = "https://swapi.dev/api/people/"
const PLANETS_API_URL = "https://swapi.dev/api/planets/"

export default function Characters() {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    async function fetchData() {
      let data = JSON.parse(getSavedData(`character${id}`));
      if (!data) {
        try {
          const response = await enhancedFetchTest(PEOPLE_API_URL + id);
          data = response;
          saveData(`character${id}`, data);
        } catch (err) {
          setHasError(true);
        }
      }
      setDetails(data)
      setLoading(false);
    }
    fetchData()
  }, [])

  return (
    <div className='container text-center lh-base '>
      <h3 className='p-2'>Characters {id}</h3>
      <div className='bg-secondary d-flex flex-column align-items-center justify-content-center'>
        {characterDetails(details, loading, hasError)}

      </div>
    </div>
  )
}
