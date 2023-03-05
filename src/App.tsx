import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const theme = createTheme(
    {
      typography:
      {
        fontFamily:
        [
          'Hind',
          'sans-serif'
        ].join(',')
        
      },
      components: {
        MuiAutocomplete: {
          styleOverrides: {
            input: {
              
                color: "white"
              
            },
            focused: {
              
              background: "white"
            
            },
            endAdornment: {
              
              color: "white"
            
            },
          }
        },
        MuiFormLabel:
        {
          styleOverrides:
          {
            root:
            {
              color:'white',
              border: 'white'
            },
            
          }
        },
        MuiInputBase:
        {
          styleOverrides:
          {
            focused:
            {
              border:'white'
            }
          }
        }
      }
    }
  )
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
        <SearchBar/>
    </div>
    </ThemeProvider>
  );
}
export default App;
