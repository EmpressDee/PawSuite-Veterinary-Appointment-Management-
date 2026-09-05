import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import Clients from "./pages/clientPage";
import Pets from "./pages/petPage";
import NavBar from "./components/NavBar";
import AppointmentDetail from "./pages/ApptDetail";
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from "./components/ProtectedRoute";
import ApptCalendar from "./components/Calendar";


export default function App() {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/appointments/:id" element={<ProtectedRoute><AppointmentDetail /></ProtectedRoute> } />
          <Route path="/clients" element={ <ProtectedRoute><Clients /></ProtectedRoute> } />
          <Route path="/pets" element={ <ProtectedRoute><Pets /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/calendar" element={<ProtectedRoute><ApptCalendar/></ProtectedRoute>}/>
        </Routes>
      </div>
    </div>
  );
}
