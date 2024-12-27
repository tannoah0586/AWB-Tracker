import { Link } from 'react-router-dom';

const AWBShortlist =(props)=> {
    return (
        <div>
            <h2>AWB Shortlist</h2>
            <h3>Number of AWBs in Shortlist: {props.awbShortlist.length}</h3>
            {!props.awbShortlist.length ? (
                <h3>Shortlist Empty!</h3>
            ) : (
                <ul>
                    {props.awbShortlist.map((awb) => (
                        <Link to={'/awbShortlist'} key={awb.id} >
                            <li>{awb?.fields["HAWB/HBL"]}</li>
                            <button onClick={(e) => props.handleRemoveAWB(e, awb)}>Remove from shortlist</button>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );

}

export default AWBShortlist