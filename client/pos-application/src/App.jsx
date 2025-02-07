import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Bills from "./pages/Bills";
import Customers from "./pages/Customers";
import Statistic from "./pages/Statistic";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/register","/login"];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/statistics" element={<Statistic />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
