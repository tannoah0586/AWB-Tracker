import { useState,useEffect } from 'react'
import './App.css'
import * as awbService from './services/awbService'
import AWBList from './components/AWBList';

const App = () => {
  const [awbList,setAwbList] = useState([]);

  useEffect(()=>{
    const fetchDefaultData = async () => {
      try {
        const data = await awbService.show();
        setAwbList(data.records);
      } catch (error) {
        console.log(error)
      }
    };
    fetchDefaultData();
  },[]);


  return <AWBList awbList = {awbList}/>;
};

export default App;
