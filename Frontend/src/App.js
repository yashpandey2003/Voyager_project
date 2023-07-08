import React, {useState} from 'react';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import img1 from './images/logo.png';
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className='App'>
    <a href=""><img className="logo-img" src={img1} alt="logo"/></a>
    <Router>
      <Routes>
        <Route exact path=""  element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
        
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;










