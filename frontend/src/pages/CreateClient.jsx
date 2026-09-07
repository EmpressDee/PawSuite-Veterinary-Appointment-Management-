import { useState } from "react";

export default function CreateClient() {
  const [clients, setClients] = useState([]);
  const [clientForm, setClientForm] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setClientForm({
      ...clientForm, //spread operator. copies existing clientForm
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />

      <input 
      type="text"
      name="phone"
      placeholder="xxx-xxx-xxxx"
      onChange={handleChange}
      />

      <input 
      type="email"
      name="email"
      placeholder="email@address.com"
      onChange={handleChange}
       />

       <button>Submit</button>
    </form>
  );
}
