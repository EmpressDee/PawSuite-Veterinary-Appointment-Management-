import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import Clients from "./pages/clientPage";
import Pets from "./pages/petPage";
import NavBar from "./components/NavBar";
import AppointmentDetail from "./pages/ApptDetail";

export default function App() {
  return (
    <div className="app-wrap">
      <NavBar />
      
       <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/appointments/:id" element={<AppointmentDetail />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/pets" element={<Pets />} />
    </Routes>
      </div>
   
  );
}




