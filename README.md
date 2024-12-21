# AWB-Tracker

user Stories

1. As a user, I want to filter for AWBs based on mode type and country origin.
2. As a user, I want to view a list of AWBs so that I can see all available shipments and/or i can filter based on the mode and lane.
3. As a user, I want to see detailed information about a specific AWB so that I can track its status.
4. As a user, I want to see an indication if a shipment is delayed so that I can be aware of potential issues. 
5. As a user, i want an email to be sent cc myself and service provider to request update of at risk shipments (future backend)
6. As a user, i want a weekly table report on the status of the near risk or at risk shipments (future backend)


wireframe:
1. Home Page
    * Search Bar:
        * Input field for entering AWB number or search query.
        * Placeholder text: "Enter AWB number..."
    * Search Button:
        * Button labeled "Search".
    * Recent Searches:
        * List of recently searched AWBs for quick access.
2. Search Results Page
    * AWB List:
        * A list displaying brief details of each AWB.
        * Columns: AWB number, origin, destination, status.
    * AWB Item:
        * Clickable items to view more details.
        * Visual indicator if the shipment is delayed.
3. AWB Detail Page
    * AWB Information:
        * Detailed information about the selected AWB.
        * Fields: AWB number, origin, destination, status, expected delivery date, current location.
    * Delay Indicator:
        * Visual indication if the shipment is delayed.
    * Actions:
        * Buttons for possible actions (e.g., "Contact Service Provider").
4. Comparison Page  (backend related might need node.js)
    * Comparison Table:
        * Table comparing AWBs on different lanes.
        * Columns: AWB number, origin, destination, status, lead time, delay status.
    * Comparison Criteria:
        * Dropdowns or filters to select criteria for comparison.
5. Navigation
    * Navbar:
        * Links to Home, Search Results, and Comparison pages.
        * Additional links for future features (e.g., "Settings", "Profile").
6. Future Enhancements?
    * Email Notifications:
        * Option to send emails to service providers if delays are detected.
    * Lead Time Alerts:
        * Alerts if lead times exceed or are close to exceeding thresholds.