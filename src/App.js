import "./vendors/bootstrap/css/bootstrap.min.css"
import "./vendors/bootstrap/solar.css"

import logo from './logo.svg';
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import './App.css';

import HomePage from "./HomePage/index";
import LoginPage from "./LoginPage/index";
import Login from "./LoginPage/Login/index";
import Register from "./LoginPage/Register/index";


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route path="/">
                  <Route index element={<HomePage/>}/>
                  <Route path="login" element={<LoginPage/>}>
                      <Route index element={<Login/>}/>
                      <Route path="register" elemenet={<Register/>}/>
                  </Route>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
