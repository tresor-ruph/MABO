import Home from "./home";
import { Route, Routes, } from "react-router-dom";

export default function Main() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
