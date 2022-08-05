import { useEffect, useState } from "react"
import Card from "../components/Card"

const Favorites = () => {
    //state
    const [apiKey] = useState("001a38bf2605ca310636ecc47e07be51")
    const [movies, setMovies] = useState([])

    //componantDidMount
    useEffect(() => {
        fetchFavorites()

        // eslint-disable-next-line
    }, [])

    // methodes
    const fetchFavorites = async () => {
        const strigifiedFavoriteIds = localStorage.getItem("favoriteIds")
        const favoriteIds = JSON.parse(strigifiedFavoriteIds)
        const promises = favoriteIds.map((id) => {
            return fetchMovie(id)
        })
        const promisesAllResult = await Promise.all(promises)
        setMovies(promisesAllResult)
    }

    const fetchMovie = async (id) => {
        const request = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        )
        const response = await request.json()
        return response
    }

    return (
        <main>
            <h1>Favorites</h1>
            <section className="w-screen flex flex-wrap gap-2 justify-center">
                {movies.map((movie) => {
                    return (
                        <>
                            <Card
                                key={`fav${movie.backdrop_path}${movie.title}`}
                                poster={movie.poster_path}
                                title={movie.title}
                                year={movie.release_date}
                                description={movie.overview}
                                id={movie.id}
                                render={fetchFavorites}
                            />
                        </>
                    )
                })}
            </section>
        </main>
    )
}
export default Favorites
