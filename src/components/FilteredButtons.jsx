
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const FilteredButtons = ({ handleTransportModeChange, departurePort, handleOriginChange, handleDeliverStatus })=> {
return(
    <div variant="contained" aria-label="Basic button group">
    <h3>Filter by transport mode</h3>
        <Button onClick={() => handleTransportModeChange('Air')}>Air</Button>
        <Button onClick={() => handleTransportModeChange('Ocean')}>Ocean</Button>
        <Button onClick={() => handleTransportModeChange('all')}>All</Button>   
       <h3>Filter by Risk Level</h3>
        <Button onClick={() => handleDeliverStatus(null)}>Not Delivered</Button>
        <Button onClick={() => handleDeliverStatus('somevalue')}>Delivered</Button>
        <Button onClick={() => handleDeliverStatus('all')}>All</Button>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                <InputLabel id='origin-port'>Origin Port</InputLabel>
                <Select
                    id='origin-port'
                    value={ departurePort}
                    onChange={(e)=>handleOriginChange(e)}
                >
                    <MenuItem value = {""}>Select Origin Port</MenuItem>
                    <MenuItem value = {"BANGALORE"} >BANGALORE</MenuItem>
                    <MenuItem value = {"MUMBAI"} >MUMBAI</MenuItem>
                    <MenuItem value = {"HYDERABAD"} >HYDERABAD</MenuItem>
                    <MenuItem value = {"DELHI"} >DELHI</MenuItem>
                    <MenuItem value = {"SHANGHAI"} >SHANGHAI</MenuItem>
                </Select>
                </FormControl>
            </Box>
      
    </div>
)}

export default FilteredButtons