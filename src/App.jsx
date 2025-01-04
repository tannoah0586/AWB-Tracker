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


const App = () => {
  
  const [selected,setSelected] = useState(null);
  const [awbShortlist,setAWBshortlist] = useState([]);
  const [transportMode, setTransportMode] = useState('all');
  const [departurePort,setDeparturePort] = useState('');
  const [deliverStatus, setDeliverStatus] = useState('all');

  const [awbList,setAwbList] = useState([]);
  const [loading,setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleDeliverStatus = (status) => {
    setDeliverStatus(status);
    console.log(deliverStatus)
};
  const handleTransportModeChange = (mode) => {
    setTransportMode(mode)

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

  // useEffect(()=>{
  //   const fetchDefaultApiData = async () => {
  //     try { 
  //       const data = await awbService.show();
  //       setAwbList(data?.records);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };
  //   fetchDefaultApiData();
  // },[]);
  
  useEffect(() => {
    const fetchDefaultApiData = async () => {
        try {
            setLoading(true);
            const data = await awbService.show();
            setAwbList(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
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
      {/* <Header /> */} 
      <NavBar />
      <Routes>
          <Route path='/' element={<h2>Home Page</h2>} />
          <Route 
            path='/awbList' 
            element={
              <div className="awb-container">
                  <AWBList 
                    className="awb-list" 
                    awbList={awbList} 
                    updateSelected={updateSelected} 
                    handleAddAWB={handleAddAWB} 
                    handleTransportModeChange = { handleTransportModeChange } 
                    transportMode = { transportMode } 
                    handleOriginChange = { handleOriginChange } 
                    departurePort = { departurePort }
                    deliverStatus = { deliverStatus }
                    handleDeliverStatus = { handleDeliverStatus }
                  />
                  {/* <Pagination 
                    length = {awbList.length}
                    postsPerPage = {postsPerPage}
                    handlePagination = {handlePagination}
                  /> */}
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
  </>
);
};

export default App;