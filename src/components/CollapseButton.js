import React, { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Modall from './Modal'
import { enhancedFetchTest } from '../services/http/http'
import { getSavedData, saveData } from '../services/http/Storage'

function CollapseButton({ buttonText, api }) {
  const [open, setOpen] = useState(false)
  const [films, setFilms] = useState([])
  const [planet, setPlanet] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [type, setType] = useState('')
  const noData = `There is No ${buttonText} data!`

  async function fetchData(url) {
    const dataType = url.split("/")[4]
    const id = dataType + url.split("/")[5]
    setType(dataType)
    let savedData = JSON.parse(getSavedData(id))
    if (!savedData) {
      try {
        const data = await enhancedFetchTest(url)
        savedData = data
        saveData(id, data)
      } catch (err) {
        setHasError(true)
      }
    }
    if (dataType === 'planets') {
      setPlanet(savedData)
    }
    setFilms(film => [...film, savedData])
    setLoading(false)
    setHasError(false)
  }
  useEffect(() => {
    if (typeof api === 'string') {
      fetchData(api)
    } else {
      setFilms([])
      for (let i = 0; i < api.length; i++) {
        fetchData(api[i])
      }
    }
  }, [])


  function collapseContent() {
    console.log(type)
    if (type == 'films') {
      if (loading) {
        return (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
      if (hasError) {
        return (
          <div>
            <p>{noData}</p>
          </div>
        )
      }
      let i = 0
      return (
        <div>
          {films.map(film => (
            <Modall key={i++}
              buttonText={film.title}
              api={[film.url]}
              />
          ))}
        </div>
      )
    } else if (type == 'planets') {
      if (loading) {
        return (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
      if (hasError) {
        return (
          <div>
            <p>{noData}</p>
          </div>
        )
      }
      return (
        <>
          <div className="p-2 d-flex justify-content-between">
            <p>Name:</p>
            <p>{planet.name}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Rotation Period:</p>
            <p>{planet.rotation_period}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Orbital Period:</p>
            <p>{planet.orbital_period}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Diameter:</p>
            <p>{planet.diameter}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Climate:</p>
            <p>{planet.climate}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Terrain:</p>
            <p>{planet.terrain}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Surface Water:</p>
            <p>{planet.surface_water}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Population:</p>
            <p>{planet.population}</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Gravity:</p>
            <p>{planet.gravity}</p>
          </div>
        </>
      )
    } else if (type == 'species') {
      if (loading) {
        return (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
      if (hasError) {
        return (
          <div>
            <p>{noData}</p>
          </div>
        )
      }
      return (
          <>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Type:</p>
                  <p>{films.name}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Classification:</p>
                  <p>{films.classification}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Designation:</p>
                  <p>{films.designation}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Average Height:</p>
                  <p>{films.average_height}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Skin Color:</p>
                  <p>{films.skin_colors}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Hair Colors:</p>
                  <p>{films.hair_colors}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Eye Colors:</p>
                  <p>{films.eye_colors}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Avg Lifespan:</p>
                  <p>{films.average_lifespan}</p>
              </div>
              <div className="p-2 d-flex justify-content-between border-top border-danger">
                  <p>Language:</p>
                  <p>{films.language}</p>
              </div>
          </>
      )
    }

  }


  return (
    <div className='col-6 p-4'>
      <Button
        variant="danger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="collapseID"
      >
        {buttonText}
      </Button>
      <Collapse in={open}>
        <div className='overflow-y-auto bg-dark text-light mt-2' id="collapseID">
          {collapseContent()}
        </div>
      </Collapse>
    </div>
  )
}

export default CollapseButton