import React from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Secret from "./Components/Secret";
import "./App.css";

import {Routes, Route} from "react-router-dom";

const App = () => {

    return(
      <div>
        <Routes>
           <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/secret" element={<Secret />} />

        </Routes>
      </div>
    )

}

export default App;