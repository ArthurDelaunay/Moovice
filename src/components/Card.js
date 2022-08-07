import defaultPoster from "../default.png"
import { useState, useEffect } from "react"

const Card = (props) => {
    // states
    const [favoriteIds, setFavoritesIds] = useState([])

    // didMount
    useEffect(() => {
        const localStorageFavoriteIds = localStorage.getItem("favoriteIds")
        const favoriteIds = JSON.parse(localStorageFavoriteIds)
        setFavoritesIds(favoriteIds)
    }, [])
    // methodes
    const handleChangeFavoritesClick = (id) => {
        if (localStorage.favoriteIds === undefined) {
            const favoriteIds = []
            favoriteIds.push(id)
            const stringifiedFavoriteIds = JSON.stringify(favoriteIds)
            localStorage.setItem("favoriteIds", stringifiedFavoriteIds)
            setFavoritesIds(favoriteIds)
        } else {
            const localStorageFavoriteIds = localStorage.getItem("favoriteIds")
            const favoriteIds = JSON.parse(localStorageFavoriteIds)
            // test si id n'est pas dans le tableau
            const index = favoriteIds.indexOf(id)
            if (index === -1) {
                favoriteIds.push(id)
                const stringifiedFavoriteIds = JSON.stringify(favoriteIds)
                localStorage.setItem("favoriteIds", stringifiedFavoriteIds)
                setFavoritesIds(favoriteIds)
            } else {
                favoriteIds.splice(index, 1)
                const strigifiedSplicedFavoriteIds = JSON.stringify(favoriteIds)
                localStorage.setItem(
                    "favoriteIds",
                    strigifiedSplicedFavoriteIds
                )
                setFavoritesIds(favoriteIds)
                props.render()
            }
        }
    }

    return (
        <article className="flex border-2 border-solid border-orange-500 image-hover w-[304px] h-[504px]">
            {props.poster === null || props.isAdult ? (
                <img
                    src={defaultPoster}
                    alt={props.title}
                    className="image-size relative"
                />
            ) : (
                <img
                    src={`https://image.tmdb.org/t/p/w300${props.poster}`}
                    alt={props.title}
                    className="image-size relative"
                />
            )}
            <div className="absolute image-size p-3 flex flex-col image-hover flex flex-col items-center justify-between">
                <div className="self-start h-[10%]">
                    <button
                        onClick={() => handleChangeFavoritesClick(props.id)}
                    >
                        <p
                            className={`cursor-pointer text-5xl ${
                                favoriteIds.includes(props.id)
                                    ? "text-red-600"
                                    : "text-teal-400"
                            }`}
                        >
                            &hearts;
                        </p>
                    </button>
                </div>
                <div className="justify-between flex flex-col h-[90%]">
                    <h2 className="text-2xl text-center ">{props.title}</h2>
                    <p className="text-center text-ellipsis overflow-hidden h-[65%]">
                        {props.description}
                    </p>
                    <p className="text-center h-[10%]">{props.year}</p>
                </div>
            </div>
        </article>
    )
}
export default Card
