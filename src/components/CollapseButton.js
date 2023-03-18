import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

function CollapseButton({ buttonText, apis }) {
  const [open, setOpen] = useState(false)

  function collapseContent() {
    if (buttonText !== 'Homeworld') {
      return (
        <>
          <div className="p-2 d-flex justify-content-between">
            <p>Title:</p>
            <p>...</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Episode:</p>
            <p>...</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Director:</p>
            <p>...</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Producer:</p>
            <p>...</p>
          </div>
          <div className="p-2 d-flex justify-content-between border-top border-danger">
            <p>Release Date:</p>
            <p>...</p>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="p-2 d-flex justify-content-between">
          <p>Name:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Rotation Period:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Orbital Period:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Diameter:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Climate:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Terrain:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Surface Water:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Population:</p>
          <p>...</p>
        </div>
        <div className="p-2 d-flex justify-content-between border-top border-danger">
          <p>Gravity:</p>
          <p>...</p>
        </div>
      </>
    )
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