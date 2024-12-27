import { Link } from 'react-router-dom';

const AWBList = (props) => {
    const filteredAwbList = props.awbList.filter(awb =>
        props.transportMode === 'all' || awb.fields["Transport Mode"] === props.transportMode
    );

    return (
        <div>
            <h2>AWB List</h2>
            <h3>Number of AWBs Fetched from Freight Provider in the last 40 calendar days in the list: {props.awbList.length}</h3>
            <h3>Filter option based on transport mode</h3>
            <button onClick={() => props.handleTransportModeChange('Air')}>Air</button>
            <button onClick={() => props.handleTransportModeChange('Ocean')}>Ocean</button>
            <button onClick={() => props.handleTransportModeChange('all')}>All</button>
            {!filteredAwbList.length ? (
                    <h2>Fetching AWBs from Airtables, please wait</h2>
            ) : (
                <ul>
                    {filteredAwbList.map((awb) => (
                        <div key={awb.id} >
                            <Link to={'/awbDetails'} onClick={(e) => props.updateSelected(e,awb)}>
                                <li>{awb?.fields["HAWB/HBL"]}</li>
                            </Link>
                            <button onClick={(e) => props.handleAddAWB(e,awb)}>Add to shortlist</button>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
    
};

export default AWBList;