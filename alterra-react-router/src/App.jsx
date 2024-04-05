import "./App.css";
import { Route, Routes } from "react-router-dom";
import Help from "./pages/Help/Help";
import Games from "./pages/Game/Games";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import BurgerOrder from "./pages/BurgerOrder/BurgerOrder";
import OrderedBurger from "./pages/OrderedBurger/OrderedBurger";
import PagePost from "./pages/Posts/Post";
import Weather from "./pages/Weather/Weather";
import Recipe from "./pages/Recipe/Recipe";
import RecipeId from "./pages/Recipe/Recipe_id";

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
      <Route path="/burger-order" element={<BurgerOrder />} />
      <Route path="/order?done=" element={<OrderedBurger />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/post" element={<PagePost />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/recipe/:id" element={<RecipeId />} />
    </Routes>
  );
}
