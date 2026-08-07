import {useState, useEffect} from "react";
import { fetchPets } from "../api/pets";

export default function Pets (){
    const [pets, setPets] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null)

   useEffect(() => {
    async function getPets() {
      try {
        const response = await fetchPets();
        setPets(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    getPets();
  }, []);

  //troubshotting why pets arent showing

  if (loading) return <p>Loading pets...</p>;
  if (error) return <p>Error: {error}</p>;
    return (
        <div className="pet-page">
{pets.map((pet) => (
                <div key={pet._id}>
                    <p>{pet.firstName} {pet.lastName}</p>
                </div>
            ))}

        </div>
    )
}