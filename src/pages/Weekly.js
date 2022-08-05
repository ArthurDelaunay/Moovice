import moment from "moment"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const Weekly = () => {
    // state
    const [apiKey] = useState("001a38bf2605ca310636ecc47e07be51")
    const [weeklyMovies, setWeeklyMovies] = useState([])
    //didMount
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    // methodes
    const fetchData = async () => {
        const today = moment().format("YYYY-MM-DD")
        const sevenDaysAgo = moment().subtract(7, "days").format("YYYY-MM-DD")
        const request = await fetch(
            `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${sevenDaysAgo}&primary_release_date.lte=${today}&api_key=${apiKey}`
        )
        const response = await request.json()
        setWeeklyMovies(response.results)
    }

    return (
        <main>
            <h1>Weekly</h1>
            <section className="w-screen flex flex-wrap gap-2 justify-center">
                {weeklyMovies.map((weeklyMovie) => {
                    return (
                        <Card
                            key={`${weeklyMovie.id}${weeklyMovie.title}`}
                            poster={weeklyMovie.poster_path}
                            title={weeklyMovie.title}
                            year={weeklyMovie.release_date}
                            description={weeklyMovie.overview}
                            id={weeklyMovie.id}
                        />
                    )
                })}
            </section>
        </main>
    )
}
export default Weekly
