import {NavLink} from "react-router";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="side-bar">
            <p className="sidebar-title">🐾PawSuite</p>
            <NavLink className="nav-link" to="/">Schedule</NavLink>
            <NavLink className="nav-link" to="/clients">Clients</NavLink>
            <NavLink className="nav-link" to="/pets">Pets</NavLink>
        </nav>
    );
}