import { useState, useEffect } from 'react'
import './App.css'
import * as awbService from './services/awbService'
import AWBList from './components/AWBList';
import AWBCard from './components/AWBCard';
import AWBShortlist from './components/AWBShortlist';
import NavBar from './components/NavBar';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  const [awbList,setAwbList] = useState([]);
  const [selected,setSelected] = useState(null);
  const [awbShortlist,setAWBshortlist] = useState([]);

  const handleAddAWB = (awb) => {
    setAWBshortlist([...awbShortlist,awb]);
    setAwbList(awbList.filter((element) => element.id !== awb.id));
    // console.log(awbShortlist); //okay works
  };

  const handleRemoveAWB = (awb) => {
    setAwbList([...awbList,awb]);
    setAWBshortlist(awbShortlist.filter((element) => element.id !== awb.id));
    // console.log(awbShortlist);//okay works
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
  
const updateSelected = (awb) => {
  setSelected(awb)
}

  return (
      <>
        <NavBar />
        <div >
            <AWBCard selected = { selected } />
        </div>
          <Routes>
            <Route path='/' element={<h2>Home Page</h2>} />
            <Route path= '/awbList' element={<AWBList awbList = { awbList } updateSelected = { updateSelected } handleAddAWB = { handleAddAWB }/>} />
            <Route path='/awbShortlist' element={<AWBShortlist awbShortlist = { awbShortlist } handleRemoveAWB = { handleRemoveAWB } updateSelected = { updateSelected }/>} />
          </Routes>
      </>
  );
};

export default App;
