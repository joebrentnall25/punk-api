import "./BeerCard.scss";

const BeerCard = props => {
    return (
        <>
            <div className="card__container">
                <img src={props.beerSource} alt="Beer Image" className="card__image"/>
                <h2 className="card__title">{props.beerTitle}</h2>
                <p className="card__description">{props.beerDescription}</p>
            </div>
        </>
    )
}

export default BeerCard;