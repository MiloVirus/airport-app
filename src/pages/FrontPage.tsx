import React from 'react'
import {Grid, Box} from '@mui/material';
import airportImage from '../img/airport.png'
import {IoIosAirplane} from 'react-icons/io'
import GoogleMapsPlot from '../services/GoogleMapsPlot';

interface distanceProp{
    distance: string,
    code: string,
    code2: string,
    name: string,
    name2: string,
    flightTime: string,
    fromLat: number,
    fromLng: number,
    toLat: number,
    toLng: number
}

const FrontPage = (props:distanceProp) => {
    

  return (
    <div>
        <Grid fontFamily={'Hind'} container sx={{backgroundColor:'#D2ECF6',width:'100%', alignItems:'center'}} height={{xs:"100%",md:"115vh",lg:"125vh",xl:"135vh"}}>
            <Grid item md={6} xs={12} padding={4} order={{xs:3, md:1, lg:1 ,xl:1}}>
                <img src={airportImage} alt="" width={"100%"}/>
            </Grid>
            <Grid item md={6} xs={12} padding={{xs:0, xl:4}} justifyContent={"center"} order={{xs:1, md:2, lg:2 ,xl:2}} marginTop={{xs:0}}>
                <Box sx={{backgroundColor:'#C1DAF7', color:'#171717'}} height='100%' borderRadius={{xs:0, md:6, lg:6, xl:6}} padding={{xs:0, md:1, lg:1, xl:1}} width={{xs:"100%", md:"70%", lg:"70%", xl:"70%"}} margin={'auto'}>
                    <Box fontSize={{xs:'1.5rem', md:'2vw', lg:'1.7vw', lx:'1.4vw'}} sx={{fontWeight:'bold'}} padding={2}>Calculate the distance between two U.S Airports</Box>
                    <Grid container padding={1}>
                        <Grid item md={4} xs={12}>
                            <Box sx={{fontSize:'1.5em', fontWeight:'bold', color:'#282727'}}>{props.code}</Box>
                            <Box>{props.name}</Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box sx={{fontSize:'1.5em', fontWeight:'bold', color:'#282727'}}>
                                <IoIosAirplane/>
                                <Box sx={{fontSize:'0.7em'}}>
                                    {props.flightTime}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box sx={{fontSize:'1.5em', fontWeight:'bold', color:'#282727'}}>{props.code2}</Box>
                            <Box>{props.name2}</Box>
                        </Grid>
                    </Grid>
                    <Box sx={{fontSize:'1.5em', fontWeight:'bold', color:'#282727'}} paddingBottom={{xs:5}}>{props.distance}</Box>
                </Box>
            </Grid>
            <Grid item md={12} xs={12} padding={4} order={{xs:2, md:2, lg:3 ,xl:3}}>
                <GoogleMapsPlot fromLat={props.fromLat} fromLng={props.fromLng} toLat={props.toLat} toLng={props.toLng}/>
            </Grid>   
        </Grid>
        
    </div>
  )
}

export default FrontPage