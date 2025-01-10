import FilteredButtons from './FilteredButtons';
import FilteredAWBList from './FilteredAWBList';
import Box from '@mui/material/Box';

const AWBList = ({ departurePort, handleTransportModeChange , handleOriginChange, handleDeliverStatus, handleAddAWB, updateSelected,buttonPress, button2Press, awbList}) => {
        
    return (
        <Box >
            <FilteredButtons 
                handleTransportModeChange = {handleTransportModeChange} 
                handleOriginChange = {handleOriginChange} 
                departurePort = {departurePort} 
                handleDeliverStatus = {handleDeliverStatus}
                buttonPress={buttonPress}
                button2Press ={button2Press}
            /> 
            {awbList.length === 0 ? (
                    <h2>No AWBs found</h2>
                ) : (
        <Box sx={{ maxHeight: `calc(120vh - 120px)`, overflowY: 'auto' }}> 
          <h2>AWB List</h2>
          <h3>Number of Waybills: {awbList.length}</h3>
          <ul>
            {awbList.map((awb) => (
                <FilteredAWBList 
                    key={awb.id}
                    awb={awb}
                    handleAddAWB={handleAddAWB}
                    updateSelected={updateSelected}
                />
            ))}
          </ul>
        </Box>
            )}
        </Box>
    );
    
};

export default AWBList;