import "./vendors/bootstrap/css/bootstrap.min.css"
import "./vendors/bootstrap/solar.css"

import logo from './logo.svg';
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import './App.css';

import HomePage from "./componets/HomePage/index";
import SearchChannel from "./componets/HomePage/Feed/index"
import VideoDetails from "./componets/HomePage/Feed/videoDetails";
import LoginPage from "./componets/LoginPage/index";
import Login from "./componets/LoginPage/Login/index";
import Reg from "./componets/LoginPage/Register/index";
import Profile from "./componets/Profile/index";
import Edit from "./componets/Profile/edit"
import {ProfileProvider} from "./user-tools/context/user-context";
import SecureRoute from "./secure-route";
import commentReducer from "./video-tools/reducer/comment-reducer";
import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import './vendors/fontawesome/css/all.min.css';

const reducer = combineReducers({commentReducer})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
          <ProfileProvider>
              <BrowserRouter>
                <div className="container">
                  <Routes>
                      <Route path="/">
                          <Route path="/" element={<HomePage/>}>
                              <Route index element={<SearchChannel/>}/>
                              <Route path="/:vidID" element={<VideoDetails/>}/>
                          </Route>
                          <Route path="login" element={<LoginPage/>}>
                              <Route index element={<Login/>}/>
                              <Route path="register" element={<Reg/>}/>
                          </Route>
                          <Route path="profile" element={<SecureRoute><Profile/></SecureRoute>}/>
                          <Route path="profile/edit" element={<SecureRoute><Edit/></SecureRoute>}/>
                      </Route>
                  </Routes>
                </div>
              </BrowserRouter>
          </ProfileProvider>
        </Provider>
  );
}

export default App;
