import React from 'react';
import { useState } from 'react';
import {useQuery} from "react-query";
import loadergif from "./loader.gif";

function Dropdownmenu(){
    const countries_cities =[
       { country_name: "Select Country" ,value:""},
       { country_name: "Pakistan" ,value:"pakistan" , cities:["Karachi","Islamabad","Lahore","Sialkot","Multan","Peshawar"]},
       { country_name: "United Arab Emirates" ,value:"uae" , cities:["Abu Dhabi","Dubai","Sharjah"]},
       { country_name: "United Kingdom" ,value:"uk" , cities:["London","Glasgow","Edinburgh"]}

    ];
    const[countries,setCountries] = useState("countries");
    const[cities,setCities]=useState([""]);
    const[city,setCity]=useState("");
   
    const fetchdata = async (c)=>{
        const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid=cd0aab3ba61e4af27742fa6aa6fd4cdd");

        return result.json();
    }       
    const {data,status}= useQuery(['city',city],() => fetchdata(city),{enabled:!!city});


function selectcountry(event){
 setCountries(event.target.value);
 const selectedCities = countries_cities.find(data=> data.value && data.value===event.target.value);
 if(selectedCities){
 setCities(selectedCities.cities);
 }
 else{
    setCountries("");
    setCities([""]);
 }

}
function weatherapicall(event){
    setCity(event.target.value);
                     
    
}


    return(
        <>

        <div>
            <h1>Weather Checking Through API</h1>
        </div>
        <div>
            <h3>Check weather of your desired city</h3>
        </div>

        <div>
        <select className="selectcountry" value={countries} onChange={selectcountry}>
               {countries_cities.map((key,i)=>{
                return (<option key={i} value={key.value}>{key.country_name}</option>)
                })
             }
        </select>
             </div>
        <div>
        <select className="selectcity" value={city} onChange={weatherapicall} >
        <option value={""}>Select Your City</option>
        {cities.map((key,i)=>(<option key={i} value={key}>{key}</option>))}
        
        </select>
        </div>     
        <div className='result'>
        {status ==="error" && <p> Unable to retrieve data</p> }
        {status === "loading" && <p><img src={loadergif} alt="loadinggif" /></p>}
        {status === "success" && <p>Current Weather of {city} is {parseInt(data.main.temp-273.15)}°C</p>}
        </div>
        </>
        );
}
export default Dropdownmenu;