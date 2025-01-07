import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FilteredAWBList = ({ awb, updateSelected, handleAddAWB }) => {
return (
     <div key={awb.id} >
        <Box 
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
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
            sx={{backgroundColor:'pink',     marginLeft: '20%',  zIndex: -1 }}
        >
            Add to Shortlist
        </Button>
        </Box>

     </div>
)
}
export default FilteredAWBList