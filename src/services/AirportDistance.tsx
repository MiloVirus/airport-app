import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import FrontPage from '../pages/FrontPage';
import airports from '../airports.json'

const newAirports = airports.filter(airports => airports.country === "United States")


interface airportProps{
    name1: string,
    name2: string
}

const AirportDistance = (props:airportProps) => 
{   
    const [distance, setDistance] = useState<string>("")
    const [name1, setName] = useState<string>(props.name1)
    const [name2, setName2] = useState<string>(props.name2)
    const [flightTime, setFlightTime] = useState<string>("")
    const [originLocationLat, setOriginLocationLat] = useState<number>(0)
    const [originLocationLng, setOriginLocationLng] = useState<number>(0)
    const [destinyLocationLat, setDestinyLocationLat] = useState<number>(0)
    const [destinyLocationLng, setDestinyLocationLng] = useState<number>(0)

    let code = props.name1.substring(props.name1.length - 4)
    let code2 = props.name2.substring(props.name2.length - 4)

    const [codeName, setCodename] = useState<string>(code)
    const [codeName2, setCodename2] = useState<string>(code2)

    
    if(code === "" || code2 === "")
    {
        
    }
    else if(code === code2)
    {
        alert("Please input a different airport")
    }
    else
    {
        const options = {
        method: 'GET',
        url: `https://aerodatabox.p.rapidapi.com/airports/iata/${code}/distance-time/${code2}`,
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
          'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        
          const approxFlightTime = response.data.approxFlightTime

          setOriginLocationLat(response.data.from.location.lat)
          setDestinyLocationLat(response.data.to.location.lat)
          setOriginLocationLng(response.data.from.location.lon)
          setDestinyLocationLng(response.data.to.location.lon)

          const convertToNauticalMiles = Math.round(response.data.greatCircleDistance.mile * 0.868976) + " Nautical Miles"
          const distanceData = convertToNauticalMiles.toString()

          setDistance(distanceData)
          setName(props.name1)
          setName2(props.name2)
          setCodename(code)
          setCodename2(code2)
          setFlightTime(approxFlightTime)

      }).catch(function (error) {
          console.error(error);
      });
    }
    
 return(
 <div> 
    <FrontPage distance={distance} 
    code={codeName} 
    code2={codeName2} 
    name={name1} 
    name2={name2} 
    flightTime={flightTime} 
    fromLat={originLocationLat}
    fromLng={originLocationLng}  
    toLat={destinyLocationLat}
    toLng={destinyLocationLng} />
 </div>)
}

export {newAirports, AirportDistance}