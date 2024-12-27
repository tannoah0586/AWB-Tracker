const AWBCard = ({ selected }) => { //need to destruct and simplify if time allows
    if(!selected)
        return (
            <div>
                <h2>No AWBs Selected Yet!</h2>
            </div>
        )
        return (
            <div>
                <h2>AWB Details</h2>
                <h4>Transport Mode: {selected.fields["Transport Mode"]}</h4>
                <h4>AWB Number: {selected.fields["HAWB/HBL"]}</h4>
                <h4>Departure Port: {selected.fields["Departure Port Name"]}</h4>
                <h4>Destination Port: {selected.fields["Destination Port Name"]}</h4>
                <h4>Booking Date: {selected.fields["Customer Booking (CBK)"]}</h4>
                <h4>Picked up Date: {selected.fields["Pick UP from Customer (PUP)"]}</h4>
                <h4>Depart Date: {selected.fields["Depart from Origin Port (DEP)"]}</h4>
                <h4>Destination Port Arrival Date: {selected.fields["Arrive At Destination Port (ARR)"]}</h4>
                {!selected.fields["Proof Of Delivery (POD)"] ? (<h4>Not Delivered Yet!</h4>) : (<h4>Proof of Delivery Completed Date: {selected.fields["Proof Of Delivery (POD)"]}</h4>)}
            </div>

        )
};

export default AWBCard