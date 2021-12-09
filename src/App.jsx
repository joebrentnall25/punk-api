import React, {useEffect, useState} from 'react';
import './App.scss';

import Main from "./containers/Main/Main";
import Navbar from './containers/Navbar/Navbar';

//import beers from "./assets/data/beers.js";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const baseUrl = "https://api.punkapi.com/v2/beers?&per_page=80&";

  const [isHighAbv,setIsHighAbv] = useState(false);
  const [isClassicRange,setIsClassicRange] = useState(false)
  const [isAcidic,setIsAcidic] = useState(false)

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);

    console.log(searchTerm)
    //setBeers(fetch(searchUrl).then(response => response.json()).then(data=> data));
  }

  const getData = (url) => {
    fetch(url).then(response => response.json()).then(data=> {
      if (isAcidic){
        const filteredData = data.filter(beer => {
          return beer.ph < 4;
        })
        setBeers(filteredData);
      } else {
        setBeers(data);
      }
    });
  }

  const formatBeerName = () => {
    if (searchTerm !== "") {
      return baseUrl+"beer_name="+searchTerm.replace(" ","_")+"&"+generateUrl();
    }
    else {
      return baseUrl+generateUrl();
    }
  }

  const generateUrl = () => {
    let url = baseUrl;
    if(isClassicRange){ url += "brewed_before=01-2010&" }
    if(isHighAbv){ url +="abv_gt=6&"}
    console.log(url)
    return url;
  }

  const handleCheckboxChange = (event) => {
    //console.log(event);
    const name = event.target.name;
    if (name === "highAbv"){
      setIsHighAbv(event.target.checked);
    }
    if (name === "classicRange"){
      setIsClassicRange(event.target.checked);
    }
    if (name === "acidic"){
      setIsAcidic(event.target.checked)
    }
  }

  useEffect(() => { 
    getData(formatBeerName())
  },[searchTerm, isHighAbv, isClassicRange, isAcidic]);
  
  console.log(beers)
  

  return (
    <div className="App">
      <Navbar onChange={handleSearchChange} onCheckboxChange={handleCheckboxChange} searchTerm={searchTerm}/>
      <Main beersArr={beers}/>
    </div>
  )
}

export default App;
