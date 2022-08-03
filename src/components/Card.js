const Card = (props) => {
    return (
        <div>
            <img src={props.poster} alt="bla" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.year}</p>
            <button onClick={props.AddToFavorites}>Add to favorites</button>
        </div>
    )
}
export default Card
