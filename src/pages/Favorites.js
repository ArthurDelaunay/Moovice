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
    console.log(movies.length)
    return (
        <main>
            <h2 className="text-zinc-50 text-3xl text-center pt-5 pb-10">
                Favorites
            </h2>
            {movies.length === 0 && (
                <section className="h-calc flex justify-center items-center">
                    <p className=" text-zinc-50 text-3xl text-center">
                        Please add some movies to your favorites by clicking the
                        blue heart
                    </p>
                </section>
            )}
            <section className="w-calc flex flex-wrap gap-2 justify-center">
                {movies.map((movie) => {
                    return (
                        <>
                            <Card
                                key={`favoriteList${movie.id}${movie.title}`}
                                poster={movie.poster_path}
                                title={movie.title}
                                year={movie.release_date}
                                description={movie.overview}
                                id={movie.id}
                                isAdult={movie.adult}
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
