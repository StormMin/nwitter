import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Profile from "../routes/Profile";
import Home from "../routes/Home";
function RouterBase({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}
export default RouterBase;
