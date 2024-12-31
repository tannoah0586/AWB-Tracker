import FilteredButtons from './FilteredButtons';
import FilteredAWBList from './FilteredAWBList';

const AWBList = (props) => {
    const filteredAwbList = props.awbList.filter(awb => {
        return(props.transportMode === 'all' || awb.fields["Transport Mode"] === props.transportMode) &&
            (props.departurePort === '' || awb.fields["Departure Port Name"] === props.departurePort) &&
            (props.deliverStatus === 'all' || !awb.fields["Proof Of Delivery (POD)"] || awb.fields["Proof Of Delivery (POD)"] === props.deliverStatus)
    });
        
    return (
        <div>
            <FilteredButtons 
                handleTransportModeChange = {props.handleTransportModeChange} 
                handleOriginChange = { props.handleOriginChange } 
                departurePort = { props.departurePort } 
                handleDeliverStatus = { props.handleDeliverStatus }
            /> 
            {!filteredAwbList.length ? (
                    <h2>Fetching AWBs from Airtables, please wait</h2>
            ) : (
                <ul>
                    <h2>AWB List</h2>
                    <h3>Number of Filtered AWBs fetched from Service provider in the last 40 calendar days: {filteredAwbList.length}</h3>
                    {filteredAwbList.map((awb) => (
                        <FilteredAWBList 
                            handleAddAWB = { props.handleAddAWB } 
                            awb ={ awb } 
                            updateSelected = { props.updateSelected } 
                            key={ awb.id }
                        />                                                                      
                    ))}
                </ul>
            )}
        </div>
    );
    
};


export default AWBList;