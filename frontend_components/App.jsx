import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './Components/SignupForm/SignupForm';
import LoginForm from './Components/LoginForm/LoginForm';
//import LoadingPage from './Components/LoadingPage/LoadingPage';
import Home from './Components/Home/Home';
import Pass from './Components/Pass/Pass';
import Payement from './Components/Payement/Payement';
import Spage from './Components/search/search';
import Main from './Components/Main/Main';
import Booking from './Components/Booking/Booking';
import Option from './Components/search/option';
function App() {
  return (  
 
  <Router>
    <div>
      <Routes>
  <Route exact path="/" element={<Main/>}></Route>
  <Route exact path="/login" element={<LoginForm/>}></Route>
  <Route exact path="/sign" element={<SignupForm/>}></Route>
  <Route exact path="/pass" element={<Pass/>}></Route>
  <Route exact path="/pay" element={<Payement/>}></Route>
  <Route exact path="/searchflights" element={<Spage/>}></Route>
  <Route exact path="/Home" element={<Home/>}></Route>
  <Route exact path="/Booking" element={<Booking/>}></Route>
  <Route exact path="/option" element={<Option/>}></Route>
  </Routes>
  </div>
  </Router>

  );
}

export default App; 