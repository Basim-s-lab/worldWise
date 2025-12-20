import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
