const AWBShortlist =(props)=> {
    const awbs = props.awbShortlist.map((awb)=> (
        <a key={awb.id} onClick={() => props.updateSelected(awb)} className="awb-list">
            <li>{awb?.fields["HAWB/HBL"]}</li>
            <button className="button" onClick={() =>  props.handleRemoveAWB(awb) }>Remove from shortlist</button>
        </a>
        ));
    
        return (
            <div className="awb-list-container">
            <h1>AWB Shortlist</h1>
                <h3>Number of AWBs in Shortlist: {awbs.length}</h3>
                {!props.awbShortlist.length ? <h2>Shortlist Empty!</h2> : 
                    <ul>{awbs}</ul>}
            </div>
        );
}

export default AWBShortlist