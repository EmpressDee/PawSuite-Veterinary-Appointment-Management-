import "./petstyle.css";
import { useState, useEffect } from "react";
import { fetchPets } from "../api/pets";
import { Dog, Cat, Rabbit, PawPrint } from "lucide-react";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //function for icons

  function getSpeciesIcon(species) {
    switch (species?.toLowerCase()) {
      case "dog":
        return <Dog size={22} />;
      case "cat":
        return <Cat size={22} />;
      case "rabbit":
        return <Rabbit size={22} />;
      default:
        return <PawPrint size={22} />;
    }
  }

  useEffect(() => {
    async function getPets() {
      try {
        const response = await fetchPets();
        console.log(response.data);
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
        <div key={pet._id} className="pet-card">
          <div className="pet-icon">{getSpeciesIcon(pet.species)}</div>
          <div>
        <p className="pet-name">
          {pet.name}</p>
        <p className="pet-detail">{pet.species} — {pet.breed}</p>
      </div>
        </div>
      ))}
    </div>
  );
}
