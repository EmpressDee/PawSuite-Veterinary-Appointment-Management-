// info for pet and client
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getAppointmentById } from "../api/appointments.js";

function AppointmentDetail() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAppointmentById(id)
      .then((response) => {
        setAppointment(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading appointment...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!appointment) return <p>Appointment not found.</p>;

  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h1>Appointment Details</h1>

      <section>
        <h2>Visit Info</h2>
        <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
        <p>Visit Type: {appointment.visitType}</p>
        <p>Reason: {appointment.reason}</p>
        <p>Status: {appointment.status}</p>
      </section>

      <section>
        <h2>Pet</h2>
        <p>Name: {appointment.pet?.name}</p>
        <p>Species: {appointment.pet?.species}</p>
        <p>Breed: {appointment.pet?.breed}</p>
      </section>

      <section>
        <h2>Client</h2>
        <p>Name: {appointment.client?.firstName} {appointment.client?.lastName}</p>
        <p>Phone: {appointment.client?.phone}</p>
        <p>Email: {appointment.client?.email}</p>
      </section>
    </div>
  );
}

export default AppointmentDetail;