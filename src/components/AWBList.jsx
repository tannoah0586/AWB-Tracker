import FilteredButtons from './FilteredButtons';
import FilteredAWBList from './FilteredAWBList';

const AWBList = ({ awbList, transportMode, departurePort, deliverStatus , handleTransportModeChange , handleOriginChange, handleDeliverStatus, handleAddAWB, updateSelected,buttonPress, button2Press}) => {
    const filteredAwbList = awbList.filter(awb => {
        return(transportMode === 'all' || awb.fields["Transport Mode"] === transportMode) &&
            (departurePort === '' || awb.fields["Departure Port Name"] === departurePort) &&
            (deliverStatus === 'all' || !awb.fields["Proof Of Delivery (POD)"] || awb.fields["Proof Of Delivery (POD)"] === deliverStatus)
    });
        
    return (
        <div>
            <FilteredButtons 
                handleTransportModeChange = {handleTransportModeChange} 
                handleOriginChange = {handleOriginChange} 
                departurePort = {departurePort} 
                handleDeliverStatus = {handleDeliverStatus}
                buttonPress={buttonPress}
                button2Press ={button2Press}
            /> 
            {filteredAwbList.length === 0 ? (
                    <h2>No AWBs found</h2>
                ) : (
                    <ul>
                        <h2>AWB List</h2>
                        <h3>Number of Waybills: {filteredAwbList.length}</h3>
                        {filteredAwbList.map((awb) => (
                            <FilteredAWBList 
                                handleAddAWB={handleAddAWB} 
                                awb={awb} 
                                updateSelected={updateSelected} 
                                key={awb.id}
                            />                                                                 
                        ))}
                        
                    </ul>
            )}
            
        </div>
    );
    
};

export default AWBList;