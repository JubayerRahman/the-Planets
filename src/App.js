import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [data, setdata] = useState("Mercury")
  const getData =(data)=>{
    setdata(data)
    console.log(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar getData={getData}/>
        <Home getname={data}/>
      </header>
    </div>
  );
}

export default App;
