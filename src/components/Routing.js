import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Main from "./Main/Main";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

export default function Routing() {
  // const isAuth = useSelector((state) => state.auth.isAuth);
  // const dispatch = useDispatch();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
