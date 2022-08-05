const Card = (props) => {
    // methodes
    const handleAddToFavoritesClick = (id) => {
        if (localStorage.favoriteIds === undefined) {
            const favoriteIds = []
            favoriteIds.push(id)
            const stringifiedFavoriteIds = JSON.stringify(favoriteIds)
            localStorage.setItem("favoriteIds", stringifiedFavoriteIds)
        } else {
            const localStorageFavoriteIds = localStorage.getItem("favoriteIds")
            const favoriteIds = JSON.parse(localStorageFavoriteIds)
            // test si id n'est pas dans le tableau
            const index = favoriteIds.indexOf(id)
            if (index === -1) {
                favoriteIds.push(id)
                const stringifiedFavoriteIds = JSON.stringify(favoriteIds)
                localStorage.setItem("favoriteIds", stringifiedFavoriteIds)
            }
        }
    }
    return (
        <div className="">
            <img
                src={`https://image.tmdb.org/t/p/w300${props.poster}`}
                alt={props.title}
            />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.year}</p>
            <button onClick={() => handleAddToFavoritesClick(props.id)}>
                Add to favorites
            </button>
        </div>
    )
}
export default Card
