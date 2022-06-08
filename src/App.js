import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="details" element={<Details />} />
        <Route path="details" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
