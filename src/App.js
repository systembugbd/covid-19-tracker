import React, { useState } from 'react';
import './App.css';
import {FormControl, Select, MenuItem} from '@material-ui/core'

function App() {
  const [countries, setCountry] = useState(['USA', "BD", "IN"])
  
  return (
    <div className="App">
    <h2>Covid 19 Traker</h2>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="Worldwide" >
        
        {countries.map(country => (
          <MenuItem value={country}>{country}</MenuItem>
        ))
      }
  {
    /*
     <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">worldwide 2</MenuItem>
          <MenuItem value="worldwide">worldwide 3</MenuItem>
          <MenuItem value="worldwide">worldwide 4</MenuItem>
    
    */
  }
       
        
          </Select>       
      </FormControl>
    </div>
  );
}

export default App;
