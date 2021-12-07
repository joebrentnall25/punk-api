import "./CardList.scss";

import BeerCard from "../../components/BeerCard/BeerCard";

import beers from "../../assets/data/beers";

const CardList = () => {
    return (
        <>
        <div className="card">
            {
                beers.map((beer, index) => {
                    return <BeerCard key={index} beerSource={beer.image_url} beerTitle={beer.name} beerDescription={beer.description}/>
                })
            }
        </div>
        </>
    )
}

export default CardList;