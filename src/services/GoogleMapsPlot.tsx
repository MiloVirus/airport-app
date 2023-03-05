import React from 'react'
import {GoogleMap, useLoadScript, Polyline, Marker} from "@react-google-maps/api"



interface flightCoordinates{
    fromLat: number,
    fromLng: number,
    toLat: number,
    toLng: number
}


const GoogleMapsPlot = (props:flightCoordinates) => {
    

    const flightPlanCoordinates = [
        
            { lat: props.fromLat, lng: props.fromLng },
            { lat: props.toLat, lng: props.toLng }
    
      ];
      

    const {isLoaded} = useLoadScript(
        {
            googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
        }
    )

    if(!isLoaded)
    {
        return <div>Loading...</div>
    } 
   

        return (
            <GoogleMap zoom={5} center={{lat: props.fromLat, lng: props.fromLng}} mapContainerClassName="map-container">
                <Polyline
                path={flightPlanCoordinates}
               />
               <Marker position={{lat:props.fromLat, lng:props.fromLng}} />
               <Marker position={{lat:props.toLat, lng:props.toLng}} />
            </GoogleMap>
            )
    
}


export default GoogleMapsPlot

