import { useState,useEffect } from 'react'
import './App.css'
import * as awbService from './services/awbService'
import AWBList from './components/AWBList';
import AWBCard from './components/AWBCard';

const App = () => {
  const [awbList,setAwbList] = useState([]);
  const [selected,setSelected] = useState(null);

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
    <AWBList awbList = { awbList } updateSelected = { updateSelected } />
    <AWBCard selected = { selected } />
  </div>
  )
};

export default App;
