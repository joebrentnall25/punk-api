import "./Main.scss";

import CardList from '../CardList/CardList';

const Main = props => {
    return (
        <div className="main">
            <CardList beersArr={props.beersArr}/>
        </div>
    )
}

export default Main;