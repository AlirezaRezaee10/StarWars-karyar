import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { enhancedFetchTest } from '../services/http/http-test';

export default function Modall({ buttonText, api }) {
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    

    async function fetchData(url) {
        try {
            const data = await enhancedFetchTest(url)
            setDetails(data)
            setLoading(true)
        } catch (err) {
            setHasError(true)
        } finally {
            setLoading(false)
        }
    }
    let i=0
    

    function modalBody() {
        // for (i in api){
        //     fetchData(api[i])
            
        //     if (buttonText == 'Species') {
        //         return species()
        //     } else if (buttonText == 'Vehicles') {
        //         return vehicles()
        //     }
        //     return starships()
        // }
        return <div>This Is Test</div>
    }

    // function species() {
    //     if (loading) {
    //         return (
    //             <div className="d-flex justify-content-center align-items-center">
    //                 <div className="spinner-border" role="status">
    //                     <span className="visually-hidden">Loading...</span>
    //                 </div>
    //             </div>
    //         )
    //     }
    //     if (hasError) {
    //         return (
    //             <div>
    //                 <p>ERROR...!!!</p>
    //             </div>
    //         )
    //     }
    //     return (
    //         <>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Type:</p>
    //                 <p>{details.name}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Classification:</p>
    //                 <p>{details.classification}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Designation:</p>
    //                 <p>{details.designation}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Average Height:</p>
    //                 <p>{details.average_height}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Skin Color:</p>
    //                 <p>{details.skin_colors}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Hair Colors:</p>
    //                 <p>{details.hair_colors}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Eye Colors:</p>
    //                 <p>{details.eye_colors}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Avg Lifespan:</p>
    //                 <p>{details.average_lifespan}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Language:</p>
    //                 <p>{details.language}</p>
    //             </div>
    //         </>
    //     )
    // }
    // function vehicles() {
    //     if (loading) {
    //         return (
    //             <div className="d-flex justify-content-center align-items-center">
    //                 <div className="spinner-border" role="status">
    //                     <span className="visually-hidden">Loading...</span>
    //                 </div>
    //             </div>
    //         )
    //     }
    //     if (hasError) {
    //         return (
    //             <div>
    //                 <p>ERROR...!!!</p>
    //             </div>
    //         )
    //     }
    //     return (
    //         <>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Name:</p>
    //                 <p>{details.name}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Model:</p>
    //                 <p>{details.model}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Manufacturer:</p>
    //                 <p>{details.manufacturer}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Cost:</p>
    //                 <p>{details.cost_in_credits}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Length:</p>
    //                 <p>{details.length}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Max Speed:</p>
    //                 <p>{details.max_atmosphering_speed}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Crew:</p>
    //                 <p>{details.crew}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Passengers:</p>
    //                 <p>{details.passengers}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Cargo Capacity:</p>
    //                 <p>{details.cargo_capacity}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Consumables:</p>
    //                 <p>{details.consumables}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Vehicle Class:</p>
    //                 <p>{details.vehicle_class}</p>
    //             </div>
    //         </>
    //     )
    // }
    // function starships() {
    //     if (loading) {
    //         return (
    //             <div className="d-flex justify-content-center align-items-center">
    //                 <div className="spinner-border" role="status">
    //                     <span className="visually-hidden">Loading...</span>
    //                 </div>
    //             </div>
    //         )
    //     }
    //     if (hasError) {
    //         return (
    //             <div>
    //                 <p>ERROR...!!!</p>
    //             </div>
    //         )
    //     }
    //     return (
    //         <>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Name:</p>
    //                 <p>{details.name}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Model:</p>
    //                 <p>{details.model}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Manufacturer:</p>
    //                 <p>{details.manufacturer}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Cost:</p>
    //                 <p>{details.cost_in_credits}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Length:</p>
    //                 <p>{details.length}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Max Speed:</p>
    //                 <p>{details.max_atmosphering_speed}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Crew:</p>
    //                 <p>{details.crew}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Passengers:</p>
    //                 <p>{details.passengers}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Cargo Capacity:</p>
    //                 <p>{details.cargo_capacity}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Consumables:</p>
    //                 <p>{details.consumables}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Hyperdrive Rating:</p>
    //                 <p>{details.hyperdrive_rating}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>MGLT:</p>
    //                 <p>{details.MGLT}</p>
    //             </div>
    //             <div className="p-2 d-flex justify-content-between border-top border-danger">
    //                 <p>Class:</p>
    //                 <p>{details.starship_class}</p>
    //             </div>
    //         </>
    //     )
    // }

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
                    {modalBody()}
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
