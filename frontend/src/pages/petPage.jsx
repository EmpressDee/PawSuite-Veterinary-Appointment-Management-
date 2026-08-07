import {useState, useEffect} from "react";
import { fetchPets } from "../api/pets";

export default function Pets (){
    const [pets, setPets] = useState([]);

    useEffect(()=> {
        async function getPets() {
            const data = await fetchPets();
            setPets(data);
        }
        getPets();
    },[])

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