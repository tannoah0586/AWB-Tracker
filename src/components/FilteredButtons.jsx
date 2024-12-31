const FilteredButtons = ({ handleTransportModeChange, departurePort, handleOriginChange, handleDeliverStatus })=> {
return(
    <div className="btn-group" >
        <hr></hr>
    <h3>Filter by transport mode</h3>
        <button className="btn btn-primary" onClick={() => handleTransportModeChange('Air')}>Air</button>
        <button className="btn btn-primary" onClick={() => handleTransportModeChange('Ocean')}>Ocean</button>
        <button className="btn btn-primary" onClick={() => handleTransportModeChange('all')}>All</button>
        <hr></hr>
        <h3>Filter by Departure Port</h3>
        <select value = { departurePort } onChange = {(e) => handleOriginChange(e) } className = "btn btn-success dropdown-toggle">
            <option value = "" className="dropdown-item" >Select Origin Port</option>
            <option value = "BANGALORE" className="dropdown-item" >BANGALORE</option>
            <option value = "MUMBAI" className="dropdown-item" >MUMBAI</option>
            <option value = "HYDERABAD" className="dropdown-item" >HYDERABAD</option>
            <option value= "DELHI" className="dropdown-item" >DELHI</option>
            <option value = "SHANGHAI" className="dropdown-item" >SHANGHAI</option>
        </select>
        <hr></hr>
        <h3>Filter by Risk Level</h3>
        <button className="btn btn-primary" onClick={() => handleDeliverStatus(null)}>Not Delivered</button>
        <button className="btn btn-primary" onClick={() => handleDeliverStatus('somevalue')}>Delivered</button>
        <button className="btn btn-primary" onClick={() => handleDeliverStatus('all')}>All</button>
   
    </div>
)}

export default FilteredButtons