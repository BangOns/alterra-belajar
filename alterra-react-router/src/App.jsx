import "./App.css";
import { Route, Routes } from "react-router-dom";
import Help from "./pages/Help/Help";
import Games from "./pages/Game/Games";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Rooting />
    </>
  );
}

export default App;

function Rooting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Games />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
