const Card = (props) => {
    return (
        <div className="">
            <img src={props.poster} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.year}</p>
        </div>
    )
}
export default Card
