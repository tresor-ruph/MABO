import Home from "./home";
import Login from "../Admin/Login";
import Dashboard from "../Admin/Dashboard";
import { Route, Routes, } from "react-router-dom";

export default function Main() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adminLogin" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
