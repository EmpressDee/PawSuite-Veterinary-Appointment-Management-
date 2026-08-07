import { useState, useEffect } from "react";
import { getClients } from "../api/clients";

export default function Clients() {
  const [clients, setClients] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null)

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
    <div className="client-page">
      {clients.map((client) => (
        <div key={client._id}>
          <p>
            {client.firstName} {client.lastName}
          </p>
        </div>
      ))}
    </div>
  );
}
