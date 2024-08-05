import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Searchresult from './Components/Searchresult';
import SelectFood from './Components/SelectFood';
export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setdata] = useState(null) 
  const [filteredData, setfilteredData] = useState(null)
  const [Slectedbtn, setSlectedbtn] = useState(null)

  useEffect(() => {
    const fetchFooddata = async () =>{
        const responce = await fetch(BASE_URL);
        const json = await responce.json();
       setdata(json);
       setfilteredData(json)
    }
    fetchFooddata();
  }, [])
  const searchfood = (e)=>{
    const searchvalue= e.target.value;
    console.log(searchvalue);
    if(searchvalue===""){
      setfilteredData(null)
    }

    const filter = data?.filter((food)=>
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    )
    setfilteredData(filter)
  }

  const selectbybutton=(type)=>{
    if(type==="all"){
      setfilteredData(data);
      setSlectedbtn("all");
      return;
    }

    const filter = data?.filter((food)=>
      food.type.toLowerCase().includes(type.toLowerCase())
    )
    setfilteredData(filter)
    setSlectedbtn(type)
  }
  return (
    <>
    {/* <input type="text" onChange={searchfood}/> */}
    <Navbar searchfood={searchfood}/>
    <SelectFood selectbybutton={selectbybutton} Slectedbtn={Slectedbtn}/>
    <Searchresult data={filteredData}/>
    </>
  );
}

export default App;
