import Box from '@mui/material/Box';
import React from 'react';

const url = "https://www.gehealthcare.in/-/jssmedia/gehc/in/images/products/patient-monitoring/ge-patient-monitors-banner.jpg?h=395&iar=0&w=1263&rev=-1&hash=BA55D44A395CFFD33290C8E67036A2E8"
const HomePage = () => {
    return (
        <Box>
            <img src= {url} alt="image of something related to waybill tracking" style={{ width: '100%', height: 'auto' }} 
            />
            <ul>
                <li>This app aims to helps you to keep track waybills efficiently and provides real-time updates on your shipments.</li>
                <li>Future development includes automated notifications to both users and service providers, alerting them if a shipment is at risk or nearing a critical state. Periodic reports will also be generated.</li>
            </ul>
        </Box>
    );
};

export default HomePage