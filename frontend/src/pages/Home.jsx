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
        getAppointments()
        .then((response) => {
            setAppointments(response.data);
            setLoading(false);
        });

    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    });
}[];

 const filteredAppointments = appointments.filter((appt) => {
    const search = filterText.toLowerCase();
    return (
      appt.client?.firstName?.toLowerCase().includes(search) ||
      appt.client?.lastName?.toLowerCase().includes(search) ||
      appt.pet?.name?.toLowerCase().includes(search)
    );
  });

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>This Week's Appointments</h1>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />

      {filteredAppointments.map((appt) => (
        <Link key={appt._id} to={`/appointments/${appt._id}`}> 
          <div>
            <p>{appt.pet?.name} — {appt.client?.firstName} {appt.client?.lastName}</p>
            { <p>{new Date(appt.date).toLocaleDateString()} — {appt.visitType}</p>   /*.tolocaleDateString returns the date portion converting to local time zone*/}
          </div>
        </Link>
      ))}
    </div>
  );





export default HomePage