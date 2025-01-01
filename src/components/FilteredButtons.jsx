import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


const FilteredButtons = ({ handleTransportModeChange, departurePort, handleOriginChange, handleDeliverStatus })=> {
return(
    <Card sx={{ minWidth: 500 }}>
    <div variant="contained" aria-label="Basic button group">
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
            Filter by Transport mode</Typography>
            <Button onClick={() => handleTransportModeChange('Air')}>Air</Button>
            <Button onClick={() => handleTransportModeChange('Ocean')}>Ocean</Button>
            <Button onClick={() => handleTransportModeChange('all')}>All</Button>   
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
            Filter by Risk Level</Typography>
            <Button onClick={() => handleDeliverStatus(null)}>Not Delivered</Button>
            <Button onClick={() => handleDeliverStatus('somevalue')}>Delivered</Button>
            <Button onClick={() => handleDeliverStatus('all')}>All</Button>
            <Box >
                <FormControl sx={{ width: 200 }}>
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
    </Card>
)}

export default FilteredButtons