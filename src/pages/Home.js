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
        const today = moment().format("YYYY-MM-DD")
        const threeDaysAgo = moment().subtract(3, "days").format("YYYY-MM-DD")
        const request = await fetch(
            `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${threeDaysAgo}&primary_release_date.lte=${today}&api_key=${apiKey}`
        )
        const response = await request.json()
        setLastestMovies(response.results)
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
            <h1>Home</h1>
            <section className="w-screen flex flex-wrap gap-2 justify-center">
                <h2>Latest Movies</h2>
                {latestMovies.map((movie) => {
                    return (
                        <Card
                            key={`lm${movie.id}${movie.title}`}
                            poster={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                        />
                    )
                })}
            </section>
            <section className="w-screen flex flex-wrap gap-2 justify-center">
                <h2>Top Rated Movies</h2>
                {topRatedMovies.map((movie) => {
                    return (
                        <Card
                            key={`tr${movie.id}${movie.title}`}
                            poster={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                        />
                    )
                })}
            </section>
            <section className="w-screen flex flex-wrap gap-2 justify-center">
                <h2>Now Playing</h2>
                {nowPlayingMovies.map((movie) => {
                    return (
                        <Card
                            key={`np${movie.id}${movie.title}`}
                            poster={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            description={movie.overview}
                            id={movie.id}
                        />
                    )
                })}
            </section>
            <section className="w-screen flex flex-wrap gap-2 justify-center">
                <h2>Upcoming</h2>
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
