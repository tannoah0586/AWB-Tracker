const FilteredButtons = ({ handleTransportModeChange })=> {

return(
    <div>
    <h3>Filter option based on transport mode</h3>
        <button onClick={() => handleTransportModeChange('Air')}>Air</button>
        <button onClick={() => handleTransportModeChange('Ocean')}>Ocean</button>
        <button onClick={() => handleTransportModeChange('all')}>All</button>
    </div>
)}

export default FilteredButtons