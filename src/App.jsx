import { useState,useEffect } from 'react'
import './App.css'
import * as awbService from './services/awbService'
import AWBList from './components/AWBList';
import AWBCard from './components/AWBCard';
import AWBShortlist from './components/AWBShortlist';

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
  <div className="container">
    <AWBList awbList = { awbList } updateSelected = { updateSelected } handleAddAWB = { handleAddAWB }/>
    <div className='sticky-card'>
      <AWBCard selected = { selected } />
    </div>
    <div className='sticky-card'>
      <AWBShortlist awbShortlist = { awbShortlist } handleRemoveAWB = { handleRemoveAWB } updateSelected = { updateSelected }/>
    </div>
  </div>
  )
};

export default App;
