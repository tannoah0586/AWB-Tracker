import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FilteredAWBList = ({ awb, updateSelected, handleAddAWB }) => {
return (
     <div key={awb.id} >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to={'/awbDetails'} onClick={(e) => updateSelected(e,awb)} style={{color:"purple"}}>
            <li>{awb?.fields["HAWB/HBL"]}</li>
        </Link>
        <Fab 
            color="primary" 
            aria-label="add" 
            onClick={(e) => handleAddAWB(e,awb)}
        >
            <AddIcon />
        </Fab>
        </Box>

     </div>
)
}
export default FilteredAWBList