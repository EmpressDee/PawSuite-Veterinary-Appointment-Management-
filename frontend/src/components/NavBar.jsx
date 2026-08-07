import {Link} from "react-router";

export default function NavBar() {
    return (
        <nav style={{ display: "flex", gap: "16px"}}>
            <Link to="/">Home</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/pets">Pets</Link>
        </nav>
    );
}