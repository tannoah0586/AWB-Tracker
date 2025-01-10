// https://dev.to/canhamzacode/how-to-implement-pagination-with-reactjs-2b04
// https://www.educative.io/answers/how-to-implement-pagination-in-reactjs

import { useState, useEffect } from 'react'
import './App.css'
import * as awbService from './services/awbService'
import AWBList from './components/AWBList';
import AWBCard from './components/AWBCard';
import AWBShortlist from './components/AWBShortlist';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import HomePage from './components/HomePage';


const App = () => {
  
  const [selected,setSelected] = useState(null);
  const [awbShortlist,setAWBshortlist] = useState([]);
  const [transportMode, setTransportMode] = useState('all');
  const [departurePort,setDeparturePort] = useState('');
  const [deliverStatus, setDeliverStatus] = useState('all');
  const [buttonPress, setButtonPress] = useState('');
  const [button2Press, setButton2Press] = useState('');

  const [awbList,setAwbList] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const handleNextPage = ()=> {
    setCurrentPage((prevPage) => prevPage + 1)
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = awbList.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleDeliverStatus = (status) => {
    setDeliverStatus(status);
    setButton2Press(status);
};
  const handleTransportModeChange = (mode) => {
    setTransportMode(mode);
    setButtonPress(mode);
  };

  const handleOriginChange = (e) => {
    e.preventDefault();
    setDeparturePort(e.target.value)
  }

  const handleAddAWB = (e, awb) => {
    e.preventDefault();
    setAWBshortlist([...awbShortlist,awb]);
    setAwbList(awbList.filter((element) => element.id !== awb.id));
  };

  const handleRemoveAWB = (e, awb) => {
    e.preventDefault();
    setAwbList([...awbList,awb]);
    setAWBshortlist(awbShortlist.filter((element) => element.id !== awb.id));
  }

  useEffect(() => {
    const fetchDefaultApiData = async () => {
      try {
        const data = await awbService.getallRecords();
        console.log(data); // Log the entire data object
        if (data && data.records) {
          setAwbList(data.records);
        } else {
          console.log("Data or records are undefined");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDefaultApiData();
  }, []);


const updateSelected = (e, awb) => {
  e.preventDefault();
  setSelected(awb)
}

return (
  <>
  <Box sx={{ position: 'fixed', top: 0, width: '100%' }} >
      <NavBar />
  </Box>
    <Box sx={{ marginTop: '64px' }}>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route 
            path='/awbList' 
            element={
              <div className="awb-container">
                  <AWBList 
                    className="awb-list" 
                    // awbList={awbList} 
                    updateSelected={updateSelected} 
                    handleAddAWB={handleAddAWB} 
                    handleTransportModeChange = { handleTransportModeChange } 
                    transportMode = { transportMode } 
                    handleOriginChange = { handleOriginChange } 
                    departurePort = { departurePort }
                    deliverStatus = { deliverStatus }
                    handleDeliverStatus = { handleDeliverStatus }
                    buttonPress = {buttonPress}
                    button2Press = {button2Press}
                    awbList={currentRecords} 
                  />
                    <div>
                      {currentRecords.map((record) => (
                        <div key={record.id}>{record.name}</div>
                      ))}
                      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                      </button>
                      <button onClick={handleNextPage} disabled={indexOfLastRecord >= awbList.length}>
                        Next
                      </button>
                    </div>
                  <AWBCard 
                    className="awb-card"
                    selected={selected} />
              </div>
          } />
          <Route path='/awbShortlist' element={
            <AWBShortlist 
              awbShortlist={awbShortlist} 
              handleRemoveAWB={handleRemoveAWB} 
              updateSelected={updateSelected} 
            />} 
          />
      </Routes>
  </Box>
  </>
);
};

export default App;