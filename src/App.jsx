import { useState, useEffect } from 'react'
import './App.css'
import * as awbService from './services/awbService'
import AWBList from './components/AWBList';
import AWBCard from './components/AWBCard';
import AWBShortlist from './components/AWBShortlist';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [awbList,setAwbList] = useState([]);
  const [selected,setSelected] = useState(null);
  const [awbShortlist,setAWBshortlist] = useState([]);

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

  useEffect(()=>{
    const fetchDefaultData = async () => {
      try { 
        const data = await awbService.show();
        setAwbList(data?.records);
      } catch (error) {
        console.log(error)
      }
    };
    fetchDefaultData();
  },[]);
  
const updateSelected = (e, awb) => {
  e.preventDefault();
  setSelected(awb)
}

return (
  <>
      <NavBar />
      <Routes>
          <Route path='/' element={<h2>Home Page</h2>} />
          <Route path='/awbList' element={
              <>
                  <AWBCard selected={selected} />
                  <AWBList awbList={awbList} updateSelected={updateSelected} handleAddAWB={handleAddAWB} />
              </>
          } />
          <Route path='/awbShortlist' element={<AWBShortlist awbShortlist={awbShortlist} handleRemoveAWB={handleRemoveAWB} updateSelected={updateSelected} />} />
      </Routes>
  </>
);
};

export default App;
