import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";
import "./app.css"
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import Reports from "./Pages/Reports";
import Team from "./Pages/Team";
import Message from "./Pages/Message";
import Support from "./Pages/Support";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact  element={<Home/>}/>
          <Route path="/reports"  element={<Reports/>}/>
          <Route path="/products"  element={<Products/>}/>
          <Route path="/team"  element={<Team/>}/>
          <Route path="/message"  element={<Message/>}/>
          <Route path="/support"  element={<Support/>}/>
        </Routes>
      </Router>
    </>
  );  
}

export default App;
