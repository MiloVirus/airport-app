import React from 'react'
import {useState} from 'react';
import {AirportDistance, newAirports} from '../services/AirportDistance';
import { Grid, Box, Autocomplete, TextField } from '@mui/material';

const SearchBar = () => {


      const [inputValue, setInputValue] = useState<string>("Lehigh Valley International Airport ABE")
      const [inputValue2, setInputValue2] = useState<string>("Abilene Regional Airport ABI")
              
  return (
    <div>
        <Grid fontFamily={'Hind'} container spacing={2} sx={{background:'#254690', alignItems:'center', flexWrap:'wrap'}}>
            <Grid item md={4} xs={12}>
                <Box sx={{p:2, color:'white'}}>
                    <h2>Airports Distance</h2>
                </Box>
            </Grid>
            <Grid item md={4} xs={12}>
                <Box sx={{p:2, color:'white'}}>
                    <Autocomplete
                        id="combo-box-demo"
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                          }}
                        
                        options={newAirports.map(airports => `${airports.name} ${airports.code}`)}
                        renderInput={(params) => <TextField {...params} label="Airport" sx={{color:'white'}}/>}
                    />
                </Box>
            </Grid>
            <Grid item md={4} xs={12}>
                <Box sx={{p:2, color:'white'}}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        inputValue={inputValue2}
                        onInputChange={(event, newInputValue) => {
                            setInputValue2(newInputValue);
                          }}
                        options={newAirports.map(airports => `${airports.name} ${airports.code}`)}
                        renderInput={(params) => <TextField {...params} label="Airport" />}
                    />
                </Box>
            </Grid>
        </Grid>
        <AirportDistance name1={inputValue} name2={inputValue2}/>
    </div>
  )
}

export default SearchBar