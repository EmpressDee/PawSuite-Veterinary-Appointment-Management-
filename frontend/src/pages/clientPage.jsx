import { useState, useEffect } from "react";
import { getClients } from "../api/clients";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getClients() {
      const data = await getClients();
      setClients(data);
    }
    getClients();
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
