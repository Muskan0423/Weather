import React from 'react'
import { useState } from 'react';
function WeatherApp() {

    const[city,setcity]=useState("")
    const[weather,setweather]=useState(null)
    const [error, setError] = useState(null);
    // const apiId="7055ab7f6a4b0c4acd87df6b588a77b9"

const Search = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7055ab7f6a4b0c4acd87df6b588a77b9`)
.then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    setweather(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
};
const handleSearch = (e) => {
  e.preventDefault();
  Search();
};
  return (
    <div>
      <div className="container mb-1">
        <h3 style={{color:'#0d6efd'}}>Enter Place for Weather Search</h3>
       <form class="d-flex justify-content-end" role="search" onSubmit={handleSearch}>
        <input class="form-control bg-blue me-2" type="text" onChange={(e) => setcity(e.target.value)} placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary btn-outline" type="submit" onClick={handleSearch}>Search</button>
      </form>
      </div>
    <div className="container">
        <div className ="card-group">
        <div class="card  mx-4 my-4" style={{width: "18rem",height:"250px",backgroundColor:'#0d6efd'}}>
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div class="card-body d-flex justify-content-between flex-column" style={{color:'white'}}>
            <h3 class="card-title">STATE</h3>
            <h1 class="card-text">{weather?.name}</h1>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
        <div class="card  mx-4 my-4" style={{width: "18rem",height:"250px",backgroundColor:'#0d6efd'}}>
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div class="card-body d-flex justify-content-between flex-column" style={{color:'white'}}>
            <h3 class="card-title" >TEMPERATURE</h3>
            <h1 class="card-text" >{weather?.main?.temp}</h1>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
        </div>
        </div>
        <div className="container">
        <div className ="card-group">
        <div class="card  mx-4 my-4" style={{width: "18rem",height:"250px",backgroundColor:'#0d6efd'}}>
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        {/* <div class="card-body d-flex justify-content-between flex-column" style={{color:'white'}}> */}
        <div class="card-body d-flex justify-content-between flex-column" style={{color:'white'}}>

            <h3 class="card-title">WEATHER</h3>
            <h1 class="card-text">{weather?.weather[0]?.main}</h1>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
        <div class="card  mx-4 my-4" style={{width: "18rem",height:"250px",backgroundColor:'#0d6efd'}}>
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div class="card-body d-flex justify-content-between flex-column" style={{color:'white'}}>
            <h3 class="card-title">TIMEZONE</h3>
            <h1 class="card-text">{weather?.timezone}</h1>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
        </div>
        </div>
        </div>
    // </div>
   
    
  );
}

export default WeatherApp;
