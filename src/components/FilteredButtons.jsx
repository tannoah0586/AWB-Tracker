const FilteredButtons = ({ handleTransportModeChange, departurePort, handleOriginChange, handleDeliverStatus })=> {
return(
    <div>
        <h3>Filter by Risk Level</h3>
        <button onClick={() => handleDeliverStatus('')}>Not Delivered</button>
        <button onClick={() => handleDeliverStatus('')}>Near Risk</button>
        <button onClick={() => handleDeliverStatus('all')}>All</button>
        <hr></hr>
    <h3>Filter by transport mode</h3>
        <button onClick={() => handleTransportModeChange('Air')}>Air</button>
        <button onClick={() => handleTransportModeChange('Ocean')}>Ocean</button>
        <button onClick={() => handleTransportModeChange('all')}>All</button>
        <hr></hr>
        <h3>Filter by Departure Port</h3>
        <select value = { departurePort } onChange = {(e) => handleOriginChange(e) }>
            <option value = "">Select Origin Port</option>
            <option value = "BANGALORE">BANGALORE</option>
            <option value = "MUMBAI">MUMBAI</option>
            <option value = "HYDERABAD">HYDERABAD</option>
            <option value= "DELHI">DELHI</option>
            <option value = "SHANGHAI">SHANGHAI</option>
        </select>
        <hr></hr>
   
    </div>
)}

export default FilteredButtons