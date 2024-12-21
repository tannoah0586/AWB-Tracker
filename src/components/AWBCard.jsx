const AWBCard = (props) => {
    if(!props.selected)
        return (
            <div>
                <h1>No Details!</h1>
            </div>
        )
        return (
            <div>
                <h1>AWB Details</h1>
                <h2>AWB Number: {props.selected.fields["HAWB/HBL"]}</h2>
                <h2>Departure Port: {props.selected.fields["Departure Port Name"]}</h2>
                <h2>Destination Port: {props.selected.fields["Destination Port Name"]}</h2>
                <h2>Booking Date: {props.selected.fields["Customer Booking (CBK)"]}</h2>
                <h2>Picked up Date: {props.selected.fields["Pick UP from Customer (PUP)"]}</h2>
                <h2>Depart Date: {props.selected.fields["Depart from Origin Port (DEP)"]}</h2>
                <h2>Destination Port Arrival Date: {props.selected.fields["Arrive At Destination Port (ARR)"]}</h2>
                <h2>Proof of Delivery Completed Date: {props.selected.fields["Proof Of Delivery (POD)"]}</h2>
            </div>

        )
};

export default AWBCard