import { Link } from "react-router-dom"
import CollapseButton from "../components/CollapseButton"
import Modall from "../components/Modal"

export function renderPosts(data, loading, error, peopleId) {
    data.id = peopleId
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <p>ERROR...!!!</p>
            </div>
        )
    }

    return (
        data.map((post) => {
            return (
                <div key={data.id++} className='card m-2 col-5'>
                    <div className="card-header">{post.name}</div>
                    <div className="card-body">
                        <p className="card-text m-2">Height: {post.height}</p>
                        <p className="card-text m-2">Gender: {post.gender}</p>
                        <Link to={`/characters/${data.id}`} className="btn w-50 btn-danger">Read More</Link>
                    </div>
                </div>
            )
        })
    )
}

export function characterDetails(data, loading, error) {
    const films = data.films
    const planet = data.homeworld
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    if (error) {
        console.log(data)
        return (
            <div>
                <p>ERROR...!!!</p>
            </div>
        )
    }
    
    return (
        <>
            <div className="top w-100 bg-light m-1 p-2 row justify-content-center">
                <div className="col-6 ">
                    <div className="p-2 d-flex justify-content-between">
                        <p>Name:</p>
                        <p>{data.name}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Height:</p>
                        <p>{data.height}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Mass:</p>
                        <p>{data.mass}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Hair Color:</p>
                        <p>{data.hair_color}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Skin Color:</p>
                        <p>{data.skin_color}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Eye Color:</p>
                        <p>{data.eye_color}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Birth Year:</p>
                        <p>{data.birth_year}</p>
                    </div>
                    <div className="p-2 d-flex justify-content-between border-top border-danger">
                        <p>Gender:</p>
                        <p>{data.gender}</p>
                    </div>
                </div>
                <div className="col-6">
                    <Modall buttonText={'Species'} api={data.species} />
                    <Modall buttonText={'Vehicles'} api={data.vehicles} />
                    <Modall buttonText={'Starships'} api={data.starships} />
                </div>
            </div>
            <div className="bottom w-100 m-1 p-2 bg-light row">
                <CollapseButton buttonText={'Homeworld'} api={planet} />
                <CollapseButton buttonText={'Films'} api={films} />

            </div>
        </>
    )
}