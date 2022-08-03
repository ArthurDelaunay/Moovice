import { useEffect, useState } from "react"
import Card from "../components/Card"

const Favorites = () => {
    //state
    const [apiKey] = useState("001a38bf2605ca310636ecc47e07be51")
    const [movies, setMovies] = useState([])
    //componantDidMount
    useEffect(() => {
        const favoriteMovies = [...movies]
        if (localStorage.favoriteIds !== undefined) {
            const strigifiedFavoriteIds = localStorage.getItem("favoriteIds")
            const favoriteIds = JSON.parse(strigifiedFavoriteIds)
            console.log(favoriteIds)
            // eslint-disable-next-line
            favoriteIds.forEach((id) => {
                fetchData(id, favoriteMovies)
            })
        }

        // eslint-disable-next-line
    }, [])

    // methodes
    const fetchData = async (id, favoriteMovies) => {
        const request = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        )
        const response = await request.json()

        favoriteMovies.push(response)
        setMovies(favoriteMovies)
    }
    console.log(movies)
    if (!movies) {
        return <div></div>
    }
    return (
        <section>
            <h1>{movies.title}</h1>
            {movies.map((movie) => {
                return (
                    <Card
                        key={movie.backdrop_path}
                        poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        title={movie.title}
                        year={movie.release_date}
                        description={movie.overview}
                    />
                )
            })}
        </section>
    )
}
export default Favorites
