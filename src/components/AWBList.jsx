const AWBList = (props) => {
    const awbs = props.awbList.map((awb)=> (
    <a key={awb.id} onClick={() => props.updateSelected(awb)} className="awb-list">
        <li>{awb?.fields["HAWB/HBL"]}</li>
        <button className="button" onClick={() =>  props.handleAddAWB(awb) }>Add to shortlist</button>
    </a>
    ));

    return (
        <div className="awb-list-container">
        <h1>AWB List</h1>
            <h3>Number of AWBs Fetched with Freight Provider in the last 40 calendar days: {awbs?.length}</h3>
            <h3>Filtering option:  ToDo</h3>
            {!props.awbList.length ? <h2>No AWBs Yet!</h2> : 
                <ul>{awbs}</ul>}
        </div>
    );
};

export default AWBList;