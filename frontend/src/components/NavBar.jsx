import {NavLink} from "react-router";
import "./NavBar.css";
import { CalendarDays, UsersRound, PawPrint, LogIn } from "lucide-react";

export default function NavBar() {
    return (
        <nav className="side-bar">
            <p className="sidebar-title">🐾PawSuite</p>
            <NavLink className="nav-link" to="/"><CalendarDays size={20} /> Appointments</NavLink>
            <NavLink className="nav-link" to="/clients"><UsersRound size={20} /> Clients</NavLink>
            <NavLink className="nav-link" to="/pets"><PawPrint size={20} /> Pets</NavLink>
            <NavLink className="nav-link" to="/login"><LogIn size={20}/> User Login</NavLink>
            {/* <NavLink className="nav-link" to="/register">Create Account</NavLink> */}
        </nav>
    );
}