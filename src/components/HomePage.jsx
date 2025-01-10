import React from 'react';
import Box from '@mui/material/Box';

const HomePage = () => {
  const heroImageUrl =
    "https://www.gehealthcare.in/-/jssmedia/gehc/in/images/products/patient-monitoring/ge-patient-monitors-banner.jpg?h=395&iar=0&w=1263&rev=-1&hash=BA55D44A395CFFD33290C8E67036A2E8";

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={heroImageUrl} alt="Waybill Tracking App" style={{ width: '100%', height: 'auto' }} />
      <Box sx={{ padding: 4, maxWidth: '800px' }}>
        <h2>Welcome to the Waybill Tracking App!</h2>
        <p>
          This app helps you efficiently manage and track your waybills, providing real-time updates on the status of your shipments.
        </p>
        <h3>Using the App</h3>
        <ul>
          <li>
            **AWB List:** Navigate to the "AWB List" section to view a list of all your waybills. This list might include filters or sorting options to help you find specific shipments.
          </li>
          <li>
            **AWB Details:** Click on an individual waybill from the list to view its detailed information, including shipment origin, destination, current status, and any other relevant details provided by the carrier.
          </li>
          <li>
            **Shortlisted Waybills (if applicable):** If the app allows shortlisting waybills, you can add important shipments to a shortlist for easier access and monitoring.
          </li>
        </ul>
        <p>
          Future development includes automated notifications to both users and service providers, alerting them if a shipment is at risk or nearing a critical state. Periodic reports will also be generated.
        </p>
      </Box>
    </Box>
  );
};
export default HomePage