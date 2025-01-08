import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FilteredAWBList = ({ awb, updateSelected, handleAddAWB }) => {
return (
        <Box 
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2, zIndex:1,}}>
        <Link 
            to={'/awbDetails'} 
            onClick={(e) => updateSelected(e,awb)} 
            style={{color:"purple"}}
        >
            <li>{awb?.fields["HAWB/HBL"]}</li>
        </Link>
        <Button
            color="primary" 
            aria-label="add" 
            onClick={(e) => handleAddAWB(e,awb)}
            sx={{backgroundColor:'pink',  marginLeft: '20%', display: 'block'}}
        >
            Add to Shortlist
        </Button>
        </Box>
)
}
export default FilteredAWBList