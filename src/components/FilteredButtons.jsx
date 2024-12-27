const FilteredButtons = ({ handleTransportModeChange, departurePort, handleOriginChange })=> {
return(
    <div>
    <h3>Filter option based on transport mode</h3>
        <button onClick={() => handleTransportModeChange('Air')}>Air</button>
        <button onClick={() => handleTransportModeChange('Ocean')}>Ocean</button>
        <button onClick={() => handleTransportModeChange('all')}>All</button>
        <h3>Filtered by Departure Port</h3>
        <select value={ departurePort } onChange = {handleOriginChange}>
            <option value = "BANGALORE">BANGALORE</option>
            <option value = "MUMBAI">MUMBAI</option>
            <option value = "SHANGHAI">SHANGHAI</option>
        </select>
    </div>
)}

export default FilteredButtons