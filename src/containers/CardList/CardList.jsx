import "./CardList.scss";

import BeerCard from "../../components/BeerCard/BeerCard";

const CardList = props => {
    return (
        <>
        <div className="card">
            {
                props.beersArr.map((beer, index) => {
                    return <BeerCard key={index} beerSource={beer.image_url} beerTitle={beer.name} beerDescription={beer.description}/>
                })
            }
        </div>
        </>
    )
}

export default CardList;