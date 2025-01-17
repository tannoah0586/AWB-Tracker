import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const today =new Date().toLocaleDateString();    
console.log(today)

const AWBCard = ({ selected }) => { 
    if(!selected)
        return (
            <Card 
                sx={{ minWidth: 275, position: 'sticky', top: 80 }}
                variant='outlined'
            >
                <CardContent>
                    <Typography variant="body2">No AWBs Selected Yet!</Typography>
                </CardContent>
            </Card>
        )

        const ARR = new Date(selected.fields["Arrive At Destination Port (ARR)"]);
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - ARR.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //returns milliseconds so need to convert to days

        return (
            <Card 
                sx={{ minWidth: 275, position: 'sticky', top: 80 }}
                variant="outlined"
            >
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>AWB Details</Typography>
                    <br />
                    <Typography variant="body2">AWB Number: {selected.fields["HAWB/HBL"]}</Typography>
                    <Typography variant="body2">Transport Mode: {selected.fields["Transport Mode"]}</Typography>
                    <Typography variant="body2">Departure Port: {selected.fields["Departure Port Name"]}</Typography>
                    <Typography variant="body2">Destination Port: {selected.fields["Destination Port Name"]}</Typography>
                    <Typography variant="body2">Booking Date: {selected.fields["Customer Booking (CBK)"]}</Typography>
                    <Typography variant="body2">Picked up Date: {selected.fields["Pick UP from Customer (PUP)"]}</Typography>
                    <Typography variant="body2">Depart Date: {selected.fields["Depart from Origin Port (DEP)"]}</Typography>
                    <Typography variant="body2">Destination Port Arrival Date: {selected.fields["Arrive At Destination Port (ARR)"]}</Typography>
                    {!selected.fields["Proof Of Delivery (POD)"] ? (<Typography variant="body2" sx= {{ color: 'purple', fontWeight: 'bold'}}>Not Delivered Yet! days since ARR: {diffDays}</Typography>) : (<Typography variant="body2">Proof of Delivery Completed Date: {selected.fields["Proof Of Delivery (POD)"]}</Typography>)}
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={(e)=> {
                            e.preventDefault();
                            window.open(`https://www.dbschenker.com/app/tracking-public/?refNumber=${selected.fields["HAWB/HBL"]}&language_region=en-US_US&uiMode=`);
                        }}
                    >Learn More</Button>
                 </CardActions>
            </Card>

        )
};

export default AWBCard