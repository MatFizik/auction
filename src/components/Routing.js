import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Auth from "./SignIn/SignIn";
import Main from "./Main/Main";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Routing() {
  // const isAuth = useSelector((state) => state.auth.isAuth);
  // const dispatch = useDispatch();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Auth />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
