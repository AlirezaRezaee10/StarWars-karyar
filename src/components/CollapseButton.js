import React, { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { enhancedFetchTest } from '../services/http/http'
import axios from 'axios'
import { getSavedData, saveData } from '../services/http/Storage'

function CollapseButton({ buttonText, api}) {
  const [open, setOpen] = useState(false)
  const [films, setFilms] = useState([])
  const [planet, setPlanet] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const noData = `There is No ${buttonText} data!`

  
  async function fetchData(url) {
    const id = url.split("/")[4]+url.split("/")[5]
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
    if (url.split("/")[4] === 'planets'){
      setPlanet(savedData)
    }
    setFilms(film => [...film, savedData])
    setLoading(false)
    setHasError(false)
  }
useEffect(() => {
  if (typeof api === 'string') {
    fetchData(api)
  }
  setFilms([])
      for (let i = 0; i < api.length; i++){
        fetchData(api[i])
      }
}, [])


  function collapseContent() {

    if (buttonText !== 'Homeworld') {
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
            <button className='btn btn-primary border border-dark' key={i++} onClick={() => { setSelectedFilm(film) }} >{film.title}</button>
          ))}
        </div>
      )
      // return (
      //   <>
      //     <div className="p-2 d-flex justify-content-between">
      //       <p>Title:</p>
      //       <p>...</p>
      //     </div>
      //     <div className="p-2 d-flex justify-content-between border-top border-danger">
      //       <p>Episode:</p>
      //       <p>...</p>
      //     </div>
      //     <div className="p-2 d-flex justify-content-between border-top border-danger">
      //       <p>Director:</p>
      //       <p>...</p>
      //     </div>
      //     <div className="p-2 d-flex justify-content-between border-top border-danger">
      //       <p>Producer:</p>
      //       <p>...</p>
      //     </div>
      //     <div className="p-2 d-flex justify-content-between border-top border-danger">
      //       <p>Release Date:</p>
      //       <p>...</p>
      //     </div>
      //   </>
      // )
    } else {
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