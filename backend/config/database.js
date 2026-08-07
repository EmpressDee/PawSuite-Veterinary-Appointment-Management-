import mongoose from "mongoose";
import dotenv from "dotenv";
import Client from "../models/Client.js";
import Pet from "../models/Pet.js";
import Appointment from "../models/Appointment.js";

dotenv.config();

const dataDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // clear exisiting data
    await Client.deleteMany({});
    await Pet.deleteMany({});
    await Appointment.deleteMany({});

    // create client data

    const clients = await Client.insertMany([
      { firstName: "Mary",
        lastName: "Smith",                                
        email: "msmith@gmail.com", 
        phone: "718-555-0101" },
      {
        firstName: "Annabelle",
        lastName: "Johnson",
        email: "anna_johnson@yahoo.com",
        phone: "917-555-0202",
      },
      { firstName: "Jim", 
        lastName: "Halpert",
        email: "itsjim@aol.com", 
        phone: "718-235-3470" },
      {
        firstName: "John",
        lastName: "Wick",
        email: "wick_john@gmail.com",
        phone: "347-235-4560",
      },
      {
        firstName: "Harry",
        lastName: "Potter",
        email: "theboywholived@gmail.com",
        phone: "917-445-0727",
      },
      {
        firstName: "Ragnar",
        lastName: "Lothbrok",
        email: "vikingpride@gmail.com",
        phone: "718-555-0727",
      },
       {
        firstName: "Susie",
        lastName:"Bones",
        email: "SHBones25@yahoo.com",
        phone: "718-500-0797",
      },
       {
        firstName: "Jerome",
        lastName: "Johnson",
        email: "JusJohnson1@gmail.com",
        phone: "876-235-3470",
      },
       {
        firstName: "Alexandria",
        lastName: "Pattel",
        email: "pattel_Alex@outlook.com",
        phone: "302-666-4727",
      },
       {
        firstName: "Bjorn",
        lastName: "Ironside",
        email: "kattegatking@gmail.com",
        phone: "862-298-1009",
      },
       {
        firstName: "Misty",
        lastName: "Lewis",
        email: "watergym87@gmail.com",
        phone: "917-555-8334",
      },
    ]);
    console.log(`${clients.length} clients data imported`);
//===============================================================================================================================================//

    // create pet data references clients[i]._id
    const pets = await Pet.insertMany([
      {
        name: "Bluey",  
        species: "cat",
        breed: "Ragdoll",
        owner: clients[1]._id,
      },
      {
        name: "Coco Chanel",
        species: "dog",
        breed: "Bichon Frise",
        owner: clients[0]._id,
      },
      {
        name: "Reptar",
        species: "reptile",
        breed: "Iguana",
        owner: clients[4]._id,
      },
      {
        name: "Mr Darcy",
        species: "cat",
        breed: "Bengal",
        owner: clients[10]._id,
      },
      {
        name: "Luna",
        species: "dog",
        breed: "Daschund",
        owner: clients[2]._id,
      },
      {
        name: "Appa",
        species: "reptile",
        breed: "Leopard Gecko",
        owner: clients[3]._id,
      },
      {
        name: "Cotton",
        species: "cat",
        breed: "Persian",
        owner: clients[0]._id,
      },
      {
        name: "Biscuit",
        species: "dog",
        breed: "Poodle",
        owner: clients[2]._id,
      },
       {
        name: "Fluffers",
        species: "rabbit",
        breed: "dwarf",
        owner: clients[5]._id,
      },
       {
        name: "Butterfree",
        species: "cat",
        breed: "DSH",
        owner: clients[7]._id,
      },
       {
        name: "Biggie",
        species: "dog",
        breed: "Rottweiler",
        owner: clients[8]._id,
      },
       {
        name: "Smaug",
        species: "reptile",
        breed: "Bearded Dragon",
        owner: clients[6]._id,
      },
       {
        name: "Popcorn",
        species: "rabbit",
        breed: "English Angora",
        owner: clients[9]._id,
      },
    ]);

    console.log(`${pets.length} pets data imported`);
//==============================================================================================================================================================//

    //appt data references pet[i]._id
    const relativeDate = (offsetDays) => {
      const date = new Date();
      date.setDate(date.getDate() + offsetDays);
      return date;
    };
     //removing hardcoded dates

    const appointments = await Appointment.insertMany([
  {
    date: relativeDate(0), // todays date
    visitType: "Wellness/Vaccines",
    reason: "Annual checkup",
    pet: pets[0]._id,
    client: pets[0].owner,
    status: "Planned",
  },
  {
    date: relativeDate(1), 
    visitType: "Wellness/Vaccines",
    reason: "Vaccination",
    pet: pets[1]._id,
    client: pets[1].owner,
    status: "Confirmed",
  },
  {
    date: relativeDate(2),
    visitType: "Nurse",
    reason: "Nail trim",
    pet: pets[2]._id,
    client: pets[2].owner,
    status: "Planned",
  },
  {
    date: relativeDate(-1), // previous day
    reason: "Skin issue follow-up",
    visitType: "Sick",
    pet: pets[3]._id,
    client: pets[3].owner,
    status: "Cancelled",
  },
  {
    date: relativeDate(3),
    reason: "Spay/neuter consult",
    visitType: "Wellness/Vaccines",
    pet: pets[4]._id,
    client: pets[4].owner,
    status: "Planned",
  },
  {
    date: relativeDate(-2),
    reason: "Bloodwork",
    visitType: "Nurse",
    pet: pets[5]._id,
    client: pets[5].owner,
    status: "Confirmed",
  },
  {
    date: relativeDate(4),
    reason: "Shedding check",
    visitType: "Sick",
    pet: pets[6]._id,
    client: pets[6].owner,
    status: "Planned",
  },
  {
    date: relativeDate(5),
    reason: "Ear infection",
    visitType: "Sick",
    pet: pets[7]._id,
    client: pets[7].owner,
    status: "Planned",
  },
   {
    date: relativeDate(3),
    reason: "Not eating",
    visitType: "Sick",
    pet: pets[9]._id,
    client: pets[9].owner,
    status: "Planned",
  },
   {
    date: relativeDate(-1),
    reason: "post op check",
    visitType: "Recheck",
    pet: pets[10]._id,
    client: pets[10].owner,
    status: "Cancelled",
  },
   {
    date: relativeDate(3),
    reason: "Annual visit",
    visitType: "Wellness/Vaccines",
    pet: pets[11]._id,
    client: pets[11].owner,
    status: "Confirmed",
  },
   {
    date: relativeDate(6),
    reason: "teeth trim",
    visitType: "Nurse",
    pet: pets[12]._id,
    client: pets[12].owner,
    status: "Cancelled",
  },
]);
    console.log(`${appointments.length} appointments data imported`);
    process.exit(0);
  } catch (err) {
    console.error("Data import error:", err.message);
    process.exit(1);
  }
};
dataDB();
