// fetches current week view and search bar
import {useState, useEffect} from "react";
import {getAppointments} from "../api/appointments.js";
import SearchBar from "../components/SearchBar.jsx";
import {Link} from "react-router";


function HomePage () {
    const [appointments, setAppointments] = useState([]);
    const [filterText, setFilterText] = useState(""),
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    });
}, []);


export default HomePage