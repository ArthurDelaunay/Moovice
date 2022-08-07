import moment from "moment"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const Home = () => {
    //state
    const [apiKey] = useState("001a38bf2605ca310636ecc47e07be51")
    const [latestMovies, setLastestMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    //didMount
    useEffect(() => {
        fetchLasterMovies()
        fetchTopRatedMovies()
        fetchPlayingMovies()
        fetchUpcomingMovies()
        // eslint-disable-next-line
    }, [])
    //methodes
    const fetchLasterMovies = async () => {
        const request = await fetch(
            `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`
        )
        const response = await request.json()
        setLastestMovies(response)
    }

    const fetchTopRatedMovies = async () => {
        const request = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        )
        const response = await request.json()
        setTopRatedMovies(response.results)
    }

    const fetchPlayingMovies = async () => {
        const request = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        )
        const response = await request.json()
        setNowPlayingMovies(response.results)
    }

    const fetchUpcomingMovies = async () => {
        const tomorrow = moment().add(1, "days").format("YYYY-MM-DD")
        const sevenDaysFuture = moment().add(7, "days").format("YYYY-MM-DD")
        const request = await fetch(
            `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${tomorrow}&primary_release_date.lte=${sevenDaysFuture}&api_key=${apiKey}`
        )
        const response = await request.json()
        setUpcomingMovies(response.results)
    }

    //render
    return (
        <main>
            <h2 className="text-zinc-50 text-3xl text-center pt-5 pb-10">
                Home
            </h2>
            <h3 className="text-zinc-50 text-xl pl-8 pb-5">Latest Movie</h3>
            <section className="w-calc flex justify-center pt-2 px-3">
                <Card
                    key={`lm${latestMovies.id}${latestMovies.title}`}
                    poster={latestMovies.poster_path}
                    title={latestMovies.title}
                    year={latestMovies.release_date}
                    description={latestMovies.overview}
                    id={latestMovies.id}
                    isAdult={latestMovies.adult}
                />
            </section>
            <h3 className="text-zinc-50 text-xl pl-8 pb-5 pt-10">
                Top Rated Movies
            </h3>
            <section className="flex flex-wrap justify-center gap-2 pt-2 px-3">
                {topRatedMovies.map((movie) => {
                    return (
                        <Card
                            key={`tr${movie.id}${movie.title}`}
                            poster={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                            isAdult={movie.adult}
                        />
                    )
                })}
            </section>
            <h3 className="text-zinc-50 text-xl pl-8 pb-5 pt-10">
                Now Playing
            </h3>
            <section className="w-calc flex flex-wrap gap-2 justify-center pt-2 px-3 ">
                {nowPlayingMovies.map((movie) => {
                    return (
                        <Card
                            key={`np${movie.id}${movie.title}`}
                            poster={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                            isAdult={movie.adult}
                        />
                    )
                })}
            </section>
            <h3 className="text-zinc-50 text-xl pl-8 pb-5 pt-10">Upcoming</h3>
            <section className="w-calc flex flex-wrap gap-2 justify-center pt-2 px-3">
                {upcomingMovies.map((movie) => {
                    return (
                        <Card
                            key={`up${movie.id}${movie.title}`}
                            poster={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                        />
                    )
                })}
            </section>
        </main>
    )
}
export default Home
