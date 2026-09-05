import {useState} from "react";


export default function CreateClient ()  {
    const [clients, setClients] = useState([]);
    const [clientForm, setClientForm] = useState({});
    

     function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;


        setClientForm({
        ...clientForm, //spread operator. copies existing clientForm
        [name]: value
     });


     }
     

 return (
     
 )
};