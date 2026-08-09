// fetches current week view and search bar
import "./Home.css";
import { useState, useEffect } from "react";
import { getAppointments } from "../api/appointments.js";
import SearchBar from "../components/SearchBar.jsx";
import NavBar from "../components/NavBar.jsx";
import { Link } from "react-router";

function HomePage() {
  const [appointments, setAppointments] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //start=2026-08-01&end=2026-08-31
  useEffect(() => {
    getAppointments()
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredAppointments = appointments.filter((appt) => {
    const search = filterText.toLowerCase();
  
    return (
      appt.client?.firstName?.toLowerCase().includes(search) ||
      appt.client?.lastName?.toLowerCase().includes(search) ||
      appt.pet?.name?.toLowerCase().includes(search)
    );
  });

   //grouping appts by date so i can have a more calendar like look
    // .reduce(accumulator, currentValue)
    const groupByDate = filteredAppointments.reduce((groups, appt) =>{  
      const dateKey = new Date(appt.date).toLocaleDateString("en-US",//making a date label. Format the date
         {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(appt);
      return groups;
    }, {});

  if (loading) return <p>Loading appointments...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app">
      <header className="page-header">
        <h1>Schedule</h1>
        <p className="page-subtitle">View and manage upcoming appointments</p>
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
      </header>

 {/* create appt container  */}
 <main className="appts-container">
  {Object.entries(groupByDate).map(([date, appts]) => (
    <div key={date} className="day-group">
      <h2 className="day-heading">{date}</h2>
      {appts.map((appt) => (
        <Link key={appt._id} to={`/appointments/${appt._id}`} className="appt-card">
          <div>
            <p>
              {appt.pet?.name} — {appt.client?.firstName} {appt.client?.lastName}
            </p>
            <p>{appt.visitType}</p>
          </div>
        </Link>
      ))}
    </div>
  ))}
</main>
    </div>
  );
}

export default HomePage;
