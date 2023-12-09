import React from "react";
import auth  from "./Auth";

import Main from "./Main/Main";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Lot from "./Lots/Lot";
import Add from "./Lots/Add";

export default function Routing() {
  const isAuth = auth((state) => state.isAuth);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ isAuth ? <Main /> : <SignIn/>}></Route>
          <Route path="/signin" element={isAuth ? <Main /> : <SignIn/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/lot" element={isAuth ? <Lot /> : <SignIn/>}></Route>
          <Route path="/add" element={isAuth ? <Add/> : <SignIn/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
