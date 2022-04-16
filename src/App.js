import React from "react";
import './App.css';
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import CreateCard from "./components/CreateCard";
import DisplayOne from "./components/DisplayOne";
import UpdateCard from "./components/UpdateCard";
import LoginReg from "./components/LoginReg";
import Dashboard from "./components/Dashboard";
import CreateAbility from "./components/CreateAbility";
import DisplayCardsByUser from "./components/DisplayCardsByUser";

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginReg/>} />
        <Route path="/createCard" element={<CreateCard/>} />
        <Route path="/displayOne/:id" element={<DisplayOne/>} />
        <Route path="/update/:id" element={<UpdateCard/>} />
        <Route path="/displayAll" element={<DisplayAll/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/createAbility" element={<CreateAbility/>} />
        <Route path="/displayCardsByUser" element={<DisplayCardsByUser/>} />


      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
