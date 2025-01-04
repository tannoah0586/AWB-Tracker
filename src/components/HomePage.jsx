import Box from '@mui/material/Box';
import React from 'react';

const url = "https://www.gehealthcare.in/-/jssmedia/gehc/in/images/products/patient-monitoring/ge-patient-monitors-banner.jpg?h=395&iar=0&w=1263&rev=-1&hash=BA55D44A395CFFD33290C8E67036A2E8"
const HomePage = () => {
    return (
        <Box>
            <img src= {url} alt="image of something related to waybill tracking" style={{ width: '100%', height: 'auto' }} 
            />
            <h3>This app aims to helps you to keep track waybills efficiently and provides real-time updates on your shipments.</h3>
            <h3>future development includes informing user and service providers automatically if shipment is at risk or near risk. report will be sent periodically</h3>
        </Box>
    );
};

export default HomePage