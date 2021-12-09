import "./Navbar.scss";

import SearchBar from "../../components/SearchBar/SearchBar";

const Navbar = props => {

    const {onChange, onCheckboxChange ,searchTerm} = props;

    return (
        <>
        <div className="navbar">
           <SearchBar onChange={onChange} onCheckboxChange={onCheckboxChange} searchTerm={searchTerm}/>
        </div>
        </>
    )
}

export default Navbar;