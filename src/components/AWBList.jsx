const AWBList = (props) => {
    const awbs = props.awbList.map((awb)=> (
    <a key={awb.id} onClick={() => props.updateSelected(awb)}>
        <li>{awb?.fields["HAWB/HBL"]}</li>
    </a>
    ));

    return (
        <div>
        <h1>AWB List</h1>
        <h2>Number of AWBs Fetched with Freight Provider in the last 40 calendar days: {awbs.length}</h2>
        {!props.awbList.length ? <h2>No AWBs Yet!</h2> : <ul>{awbs}</ul>}
        </div>
    );
};

export default AWBList;