import { useEffect, useState } from "react"
import Card from "../components/Card"
const Popular = () => {
    //state
    const [apiKey] = useState("001a38bf2605ca310636ecc47e07be51")
    const [popularMovies, setPopularMovies] = useState([])

    //componantDidMount
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    // methodes
    const fetchData = async () => {
        const request = await fetch(
            `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
        )
        const response = await request.json()
        setPopularMovies(response.results)
    }
    console.log(popularMovies)
    return (
        <>
            <h1>Popular</h1>
            {popularMovies.map((popularMovie) => {
                return (
                    <Card
                        key={popularMovie.backdrop_path}
                        poster={`https://image.tmdb.org/t/p/w300/${popularMovie.poster_path}`}
                        title={popularMovie.title}
                        year={popularMovie.release_date}
                        description={popularMovie.overview}
                    />
                )
            })}
        </>
    )
}
export default Popular
