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
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${sevenDaysAgo}&primary_release_date.lte=${today}&api_key=${apiKey}`
    )
    const response = await request.json()
    setWeeklyMovies(response.results)
  }

  return (
    <main className="w-calc">
      <h2 className="text-zinc-50 text-3xl text-center pt-5 pb-10">Weekly</h2>
      <section className="w-full flex flex-wrap gap-2 justify-center">
        {weeklyMovies.map((weeklyMovie) => {
          return (
            <Card
              key={`${weeklyMovie.id}${weeklyMovie.title}`}
              poster={weeklyMovie.poster_path}
              title={weeklyMovie.title}
              year={weeklyMovie.release_date}
              description={weeklyMovie.overview}
              id={weeklyMovie.id}
              isAdult={weeklyMovie.adult}
            />
          )
        })}
      </section>
    </main>
  )
}
export default Weekly
