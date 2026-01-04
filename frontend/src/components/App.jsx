import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import AppLayoute from "../pages/AppLayout";
import PageNotFound from "../pages/PageNotFound";
import CityList from "./CityList";
import CountryList from "./CountryList";
import City from "./City";
import Form from "./Form";
import { CitiesProvider } from "../contexts/CitiesContext";

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/app" element={<AppLayoute />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
