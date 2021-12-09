import "./SearchBar.scss";

const SearchBar = props => {

    const {searchTerm, onCheckboxChange ,onChange} = props;

    return (
    <>
    <div className="nav__search-container">
        <input className="nav__input" type="text" name="" id="" onChange={onChange}/>
        <label htmlFor="highAbv">'High ABV ({">"} 6.0%)</label>
        <input className="nav__cb" type="checkbox" name="highAbv" id="" onChange={onCheckboxChange}/>
        <label htmlFor="classicRange">Classic Range</label>
        <input className="nav__cb" type="checkbox" name="classicRange" id="" onChange={onCheckboxChange}/>
        <label htmlFor="acidic">Acidic (ph {'<'} 4)</label>
        <input className="nav__cb" type="checkbox" name="acidic" id="" onChange={onCheckboxChange}/>
    </div>
    </>);
}

export default SearchBar;