// fetches current week view and search bar
import "./Home.css";
import { useState, useEffect } from "react";
import { getAppointments } from "../api/appointments.js";
import SearchBar from "../components/SearchBar.jsx";
import NavBar from "../components/NavBar.jsx";
import { Dog, Cat, Rabbit, PawPrint } from "lucide-react";
import { Link } from "react-router";
// import ApptCalendar from "../components/calendar.jsx";

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

  // creating icon function so species get corresponding picture
  function getSpeciesIcon(species) {
    switch (species?.toLowerCase()) {
      case "dog":
        return <Dog size={20} />;
      case "cat":
        return <Cat size={20} />;
      case "rabbit":
        return <Rabbit size={20} />;
      default:
        return <PawPrint size={20} />;
    }
  }

  // function to assign color to visit types based on type
  function getVisitTypeClass(visitType) {
    switch (visitType) {
      case "Wellness/Vaccines":
        return "badge-wellness";
      case "Sick":
        return "badge-sick";
      case "Nurse":
        return "badge-nurse";
      case "Recheck":
        return "badge-recheck";
      default:
        return "badge-default";
    }
  }

  //grouping appts by date so i can have a more calendar like look
  // .reduce(accumulator, currentValue)
  const groupByDate = filteredAppointments.reduce((groups, appt) => {
    const dateKey = new Date(appt.date).toLocaleDateString(
      "en-US", //making a date label. Format the date
      {
        weekday: "long",
        month: "long",
        day: "numeric",
      },
    );
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
        <h1>Appointments</h1>
        <p className="page-subtitle">View and manage upcoming appointments</p>
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
      </header>
      {/* <ApptCalendar /> */}

      {/* create appt container  */}
      {/* Need to fix the dates to show in order...maybe use .sort() method */}
      <main className="appts-container">
        {Object.entries(groupByDate)
          .sort(
            ([, apptsA], [, apptsB]) =>
              new Date(apptsA[0].date) - new Date(apptsB[0].date),
          )
          .map(([date, appts]) => (
            <div key={date} className="day-group">
              <h2 className="day-heading">{date}</h2>
              {appts.map((appt) => (
                <Link
                  key={appt._id}
                  to={`/appointments/${appt._id}`}
                  className="appt-card"
                >
                  <div className="appt-card-content">
                    <div className="appt-card-icon">
                      {getSpeciesIcon(appt.pet?.species)}
                    </div>
                    <div>
                      <h3 className="appt-pet-name">{appt.pet?.name} </h3>

                      <p>
                        {appt.client?.firstName} {appt.client?.lastName}
                      </p>
                      <span
                        className={`visit-badge ${getVisitTypeClass(appt.visitType)}`}
                      >
                        {appt.visitType}
                      </span>
                    </div>
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
