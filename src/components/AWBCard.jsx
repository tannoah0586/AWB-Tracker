const AWBCard = (props) => { //need to destruct and simplify if time allows
    if(!props.selected)
        return (
            <div>
                <h2>No AWBs Selected Yet!</h2>
            </div>
        )
        return (
            <div>
                <h2>AWB Details</h2>
                <h4>Transport Mode: {props.selected.fields["Transport Mode"]}</h4>
                <h4>AWB Number: {props.selected.fields["HAWB/HBL"]}</h4>
                <h4>Departure Port: {props.selected.fields["Departure Port Name"]}</h4>
                <h4>Destination Port: {props.selected.fields["Destination Port Name"]}</h4>
                <h4>Booking Date: {props.selected.fields["Customer Booking (CBK)"]}</h4>
                <h4>Picked up Date: {props.selected.fields["Pick UP from Customer (PUP)"]}</h4>
                <h4>Depart Date: {props.selected.fields["Depart from Origin Port (DEP)"]}</h4>
                <h4>Destination Port Arrival Date: {props.selected.fields["Arrive At Destination Port (ARR)"]}</h4>
                {!props.selected.fields["Proof Of Delivery (POD)"] ? (<h4>Not Delivered Yet!</h4>) : (<h4>Proof of Delivery Completed Date: {props.selected.fields["Proof Of Delivery (POD)"]}</h4>)}
            </div>

        )
};

export default AWBCard