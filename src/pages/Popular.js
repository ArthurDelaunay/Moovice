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

    return (
        <main>
            <h2 className="text-zinc-50 text-3xl text-center pt-5 pb-10">
                Popular
            </h2>
            <section className="w-calc flex flex-wrap gap-2 justify-center">
                {popularMovies.map((popularMovie) => {
                    return (
                        <Card
                            key={`${popularMovie.id}${popularMovie.title}`}
                            poster={popularMovie.poster_path}
                            title={popularMovie.title}
                            year={popularMovie.release_date}
                            description={popularMovie.overview}
                            id={popularMovie.id}
                            isAdult={popularMovie.adult}
                        />
                    )
                })}
            </section>
        </main>
    )
}
export default Popular
