import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { characterDetails } from '../PostRender'
import { enhancedFetchTest } from '../../services/http/http-test'

const PEOPLE_API_URL = "https://swapi.dev/api/people/"
const PLANETS_API_URL = "https://swapi.dev/api/planets/"

export default function Characters() {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [planet, setPlanet] = useState('')
  const [specsUrl, setSpecsUrl] = useState('')
  const [vehichles, setVehichles] = useState([])
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  
  useEffect(() => {
    async function fetchData() {
        try {
            const data = await enhancedFetchTest(PEOPLE_API_URL + id)
            setDetails(data)
            setLoading(true)
        } catch (err) {
            setHasError(true)
        } finally {
            setLoading(false)
        }
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
