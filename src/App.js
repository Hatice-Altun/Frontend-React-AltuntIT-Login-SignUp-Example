import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account/Account";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/account" element={<Account/>} />
        </Routes>
    </div>
  );
}

export default App;
