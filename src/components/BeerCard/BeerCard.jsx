import "./BeerCard.scss";

const BeerCard = props => {
    return (
        <>
            <div className="card__container">
                <img src={props.beerSource} alt="Beer Image" />
                <h2>{props.beerTitle}</h2>
                <p>{props.beerDescription}</p>
            </div>
        </>
    )
}

export default BeerCard;