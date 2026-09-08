import "./clients.css";
import { useState, useEffect } from "react";
import { getClients } from "../api/clients";
import { Mail, Phone } from "lucide-react";
import CreateClient from "./CreateClient";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadClients() {
      try {
        const response = await getClients();
        setClients(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    loadClients();
  }, []);

  return (
    <div className="app">
      <header className="page-header">
        <h1>Clients</h1>
        <p className="page-subtitle">Browse all clients</p>
      </header>

      <main className="clients-container">
        {/* <CreateClient/> */}
        {clients.map((client) => (
          <div key={client._id} className="client-card">
            <div className="client-avatar">
              {client.firstName[0]}
              {client.lastName[0]}
            </div>
            <div>
              <p className="client-name">
                {client.firstName} {client.lastName}
              </p>
              <p className="client-detail">
                <Mail size={14} /> {client.email}
              </p>
              <p className="client-detail">
                <Phone size={14} /> {client.phone}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
