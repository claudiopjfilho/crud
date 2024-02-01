import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";
export default props => (
  <Routes>
    <Route exac path="/" element={<Home />} />
    <Route exac path="/users/" element={<UserCrud />} />
    <Route exac path="*" element={<Home />} />
  </Routes>
);
