import { useState } from "react"

const PEOPLE_API_URL = "https://swapi.dev/api/people/"
const PLANETS_API_URL = "https://swapi.dev/api/planets/"

function EnhancedFetch() {
    const [people, setPeople] = useState([])
    const [planets, setPlanets] = useState([])
    // const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [hasErr, setHasErr] = useState(false)


    // function fetchData(apiUrl) {
    //     fetch(apiUrl)
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //             setHasErr(true)
    //             setIsLoading(false)
    //         })
    //         .then(data => {

    //             setPosts([])
    //             setPosts(data.results)
    //             setIsLoading(false)
    //             setHasErr(false)
    //         })
    //         .catch(() => {
    //             setHasErr(true)
    //             setIsLoading(false)
    //         })

    //     return
    // }

    function fetchPeople() {
        fetch(PEOPLE_API_URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                setHasErr(true)
                setIsLoading(false)
            })
            .then(data => {
                setPeople(data.results)
                setIsLoading(false)
                setHasErr(false)
            })
            .catch(() => {
                setHasErr(true)
                setIsLoading(false)
            })

        return
    }
    function fetchPlanets() {
        fetch(PLANETS_API_URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                setHasErr(true)
                setIsLoading(false)
            })
            .then(data => {
                setPlanets(data.results)
                setIsLoading(false)
                setHasErr(false)
            })
            .catch(() => {
                setHasErr(true)
                setIsLoading(false)
            })

        return
    }

    function handleClick() {
        console.log('Click Handle')

        if (isLoading) {
            return
        }
        setIsLoading(true)

        fetchPeople()
        fetchPlanets()
    }

    // function renderPosts() {
    //     if (isLoading) {
    //         return <p>Loading...</p>
    //     }
    //     if (hasErr) {
    //         return (
    //             <div>
    //                 <p>ERROR...!!!</p>
    //             </div>
    //         )
    //     }
    //     return (
    //         posts.map((post) => {
    //             if (post.height > 0) {
    //                 return (
    //                     <div key={posts.url} className='card m-2'>
    //                         <div className="card-header">{post.name}</div>
    //                         <div className="card-body">
    //                             <p className="card-text m-2">Height: {post.height}</p>
    //                             <p className="card-text m-2">Gender: {post.gender}</p>
    //                             <a href="#" className="btn btn-danger">Read More</a>
    //                         </div>
    //                     </div>
    //                 )
    //             }else {
    //             return (
    //                 posts.map((post) => {
    //                     return (
    //                         <div key={posts.url} className='card m-2'>
    //                             <div className="card-header">{post.name}</div>
    //                             <div className="card-body">
    //                                 <p className="card-text m-2">Climate: {post.climate}</p>
    //                                 <p className="card-text m-2">Population: {post.population}</p>
    //                                 <a href="#" className="btn btn-danger">Read More</a>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             )}
    //         })
    //     )
    // }

    function renderPeople() {
        if (isLoading) {
            return <p>Loading...</p>
        }
        if (hasErr) {
            return (
                <div>
                    <p>ERROR...!!!</p>
                </div>
            )
        }
        return (
            people.map((person) => {
                return (
                    <div key={people.url} className='card m-2'>
                        <div className="card-header">{person.name}</div>
                        <div className="card-body">
                            <p className="card-text m-2">Height: {person.height}</p>
                            <p className="card-text m-2">Gender: {person.gender}</p>
                            <a href="#" className="btn btn-danger">Read More</a>
                        </div>
                    </div>
                )
            })
        )
    }
    function renderPlanets() {
        if (isLoading) {
            return <p>Loading...</p>
        }
        if (hasErr) {
            return (
                <div>
                    <p>ERROR...!!!</p>
                </div>
            )
        }
        return (
            planets.map((planet) => {
                return (
                    <div key={planets.url} className='card m-2'>
                        <div className="card-header">{planet.name}</div>
                        <div className="card-body">
                            <p className="card-text m-2">Climate: {planet.climate}</p>
                            <p className="card-text m-2">Population: {planet.population}</p>
                            <a href="#" className="btn btn-danger">Read More</a>
                        </div>
                    </div>
                )
            })
        )
    }



    return (
        <div className="row">
            <button className="btn btn-secondary" onClick={handleClick}>Star Wars People</button>
            <div className="col">
                <h2 className="m-2">Characters</h2>
                {renderPeople()}
            </div>
            <div className="col">
                <h2 className="m-2">Planets</h2>
                {renderPlanets()}
            </div>
        </div>

    )
}

export default EnhancedFetch