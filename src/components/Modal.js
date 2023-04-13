import React, { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { enhancedFetchTest } from '../services/http/http';
import { saveData, getSavedData } from '../services/http/Storage';
import CollapseButton from './CollapseButton';

export default function Modall({ buttonText, api }) {
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const noData = `There is No ${buttonText} data!`

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }


    async function fetchData(url) {
        const id = url.split("/")[4] + url.split("/")[5]
        let savedData = JSON.parse(getSavedData(id))
        if (!savedData) {
            try {
                const data = await enhancedFetchTest(url)
                savedData = data
                saveData(id, data)
                setDetails(item => [...item, data])
                setLoading(false)
                setHasError(false)
            } catch (err) {
                setHasError(true)
            }
        }
        setDetails(item => [...item, savedData])
        setLoading(false)
        setHasError(false)
    }


    useEffect(() => {
        let i = 0
        setDetails([])
        if (api.length > 0) {
            for (i in api) {
                fetchData(api[i])
            }
        } else {
            setHasError(true)
            setLoading(false)
        }
    }, [])



    function modalBody() {
        if (buttonText == 'Species') {
            return species()
        } else if (buttonText == 'Vehicles') {
            return vehicles()
        } else if (buttonText == 'Starships') {
            return starships()
        } return films()
    }

    function species() {
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
            details.map(item => {
                return (
                    <CollapseButton key={item.url} buttonText={item.name} api={item.url} />
                );
            })
        )
        // return (
        //     <>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Type:</p>
        //             <p>{details.name}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Classification:</p>
        //             <p>{details.classification}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Designation:</p>
        //             <p>{details.designation}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Average Height:</p>
        //             <p>{details.average_height}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Skin Color:</p>
        //             <p>{details.skin_colors}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Hair Colors:</p>
        //             <p>{details.hair_colors}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Eye Colors:</p>
        //             <p>{details.eye_colors}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Avg Lifespan:</p>
        //             <p>{details.average_lifespan}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Language:</p>
        //             <p>{details.language}</p>
        //         </div>
        //     </>
        // )
    }
    function vehicles() {
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
            details.map(item => {
                return (
                    <button key={item.url} className='btn btn-danger d-block m-2'>{item.name}</button>
                );
            })
        )
        // return (
        //     <>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Name:</p>
        //             <p>{details.name}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Model:</p>
        //             <p>{details.model}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Manufacturer:</p>
        //             <p>{details.manufacturer}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Cost:</p>
        //             <p>{details.cost_in_credits}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Length:</p>
        //             <p>{details.length}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Max Speed:</p>
        //             <p>{details.max_atmosphering_speed}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Crew:</p>
        //             <p>{details.crew}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Passengers:</p>
        //             <p>{details.passengers}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Cargo Capacity:</p>
        //             <p>{details.cargo_capacity}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Consumables:</p>
        //             <p>{details.consumables}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Vehicle Class:</p>
        //             <p>{details.vehicle_class}</p>
        //         </div>
        //     </>
        // )
    }
    function starships() {
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
        // let str = ''
        // for (let i=0; i < details.length; i++){
        //     str = str + `<button>${details[i].name}</button>`
        // }
        // return str

        return (
            details.map(item => {
                return (
                    <button key={item.url} className='btn btn-danger d-block m-2'>{item.name}</button>
                );
            })
        )

        // return (
        //     <>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Name:</p>
        //             <p>{details.name}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Model:</p>
        //             <p>{details.model}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Manufacturer:</p>
        //             <p>{details.manufacturer}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Cost:</p>
        //             <p>{details.cost_in_credits}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Length:</p>
        //             <p>{details.length}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Max Speed:</p>
        //             <p>{details.max_atmosphering_speed}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Crew:</p>
        //             <p>{details.crew}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Passengers:</p>
        //             <p>{details.passengers}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Cargo Capacity:</p>
        //             <p>{details.cargo_capacity}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Consumables:</p>
        //             <p>{details.consumables}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Hyperdrive Rating:</p>
        //             <p>{details.hyperdrive_rating}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>MGLT:</p>
        //             <p>{details.MGLT}</p>
        //         </div>
        //         <div className="p-2 d-flex justify-content-between border-top border-danger">
        //             <p>Class:</p>
        //             <p>{details.starship_class}</p>
        //         </div>
        //     </>
        // )
    }
    function films() {
        return (
            details.map(film => {
                return (
                    <div key={film.episode_id}>
                        <div className="p-2 d-flex justify-content-between">
                            <p>Title:</p>
                            <p>{film.title}</p>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <p>Episode:</p>
                            <p>{film.episode_id}</p>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <p>Director:</p>
                            <p>{film.director}</p>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <p>Producer:</p>
                            <p>{film.producer}</p>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <p>Release Date:</p>
                            <p>{film.release_date}</p>
                        </div>
                        <div className="p-2 d-flex justify-content-between">
                            <p>Opening Crawl:</p>
                            <p>{film.opening_crawl}</p>
                        </div>
                    </div>
                );
            })

        )
    }

    return (
        <div className='p-4 d-block'>
            <Button variant="primary" onClick={handleShow}>
                {buttonText}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{buttonText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        {modalBody()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
