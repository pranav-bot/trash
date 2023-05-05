import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Employees from './components/Employees';
import img1 from './images/maleProfile.jpg'
import Navbar from './components/nav';
import LineChart from './components/lineChart.tsx';


function App() {
  const [selectedEmployee, setEmployee] = useState("Ram")
  const [name, setName] = useState("Ram Aggarwal")
  const[empid, setId] = useState(12333)
  const [data, setData] = useState()
  function handleSelection(event){
    setEmployee(event.target.value)
    if(event.target.value==='Ram'){
      setId(123333)
      setName("Ram Aggarwal")
    }
    if(event.target.value==='Suraj'){
      setId(2244343)
      setName("Suraj Sharma")
    }
    if(event.target.value==='Laxman'){
      setId(3453)
      setName("Laxman Jain")
    }
    
  }
  return (
    <div className="App">
     <Navbar></Navbar>
      <Employees selectedValue={selectedEmployee} handleSelection={handleSelection} name={name} id={empid} img={img1}></Employees>
        <div style={{maxWidth:1000}}>
          <LineChart ></LineChart>
        </div>
     </div>
  );
}

export default App;
