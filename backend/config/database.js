import mongoose from "mongoose";
import dotenv from "dotenv";
import Client from "./models/Client.js";
import Pet from "./models/Pet.js";
import Appointment from "./models/Appointment.js";

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
      { name: "Mary Smith", 
        email: "msmith@gmail.com", 
        phone: "718-555-0101" },
      {
        name: "Annabelle Johnson",
        email: "anna_johnson@yahoo.com",
        phone: "917-555-0202",
      },
      { name: "Jim Halpert", 
        email: "itsjim@aol.com", 
        phone: "718-235-3470" },
      {
        name: "John Wick",
        email: "wick_john@gmail.com",
        phone: "347-235-4560",
      },
      {
        name: "Harry Potter",
        email: "theboywholived@gmail.com",
        phone: "917-445-0727",
      },
      {
        name: "Ragnar Lothbrok",
        email: "vikingpride@gmail.com",
        phone: "718-555-0727",
      },
       {
        name: "Susie Bones",
        email: "SHBones25@yahoo.com",
        phone: "718-500-0797",
      },
       {
        name: "Jerome Johnson",
        email: "JusJohnson1@gmail.com",
        phone: "876-235-3470",
      },
       {
        name: "Alexandria Pattel",
        email: "pattel_Alex@outlook.com",
        phone: "302-666-4727",
      },
       {
        name: "Bjorn Ironside",
        email: "kattegatking@gmail.com",
        phone: "862-298-1009",
      },
       {
        name: "Misty Lewis",
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
    date: getRelativeDate(0), // todays date
    visitType: "Wellness/Vaccines",
    reason: "Annual checkup",
    pet: pets[0]._id,
    status: "Planned",
  },
  {
    date: getRelativeDate(1), 
    visitType: "Wellness/Vaccines",
    reason: "Vaccination",
    pet: pets[1]._id,
    status: "confirmed",
  },
  {
    date: getRelativeDate(2),
    visitType: "Nurse",
    reason: "Nail trim",
    pet: pets[2]._id,
    status: "Planned",
  },
  {
    date: getRelativeDate(-1), // previous day
    reason: "Skin issue follow-up",
    visitType: "Sick",
    pet: pets[3]._id,
    status: "cancelled",
  },
  {
    date: getRelativeDate(3),
    reason: "Spay/neuter consult",
    visitType: "Wellness/Vaccines",
    pet: pets[4]._id,
    status: "Planned",
  },
  {
    date: getRelativeDate(-2),
    reason: "Bloodwork",
    visitType: "Nurse",
    pet: pets[5]._id,
    status: "confirmed",
  },
  {
    date: getRelativeDate(4),
    reason: "Shedding check",
    visitType: "Sick",
    pet: pets[6]._id,
    status: "Planned",
  },
  {
    date: getRelativeDate(5),
    reason: "Ear infection",
    visitType: "Sick",
    pet: pets[7]._id,
    status: "Planned",
  },
   {
    date: getRelativeDate(3),
    reason: "Not eating",
    visitType: "Sick",
    pet: pets[9]._id,
    status: "Planned",
  },
   {
    date: getRelativeDate(-1),
    reason: "post op check",
    visitType: "Recheck",
    pet: pets[10]._id,
    status: "Cancelled",
  },
   {
    date: getRelativeDate(3),
    reason: "Annual visit",
    visitType: "Wellness/Vaccines",
    pet: pets[11]._id,
    status: "Confirmed",
  },
   {
    date: getRelativeDate(6),
    reason: "teeth trim",
    visitType: "Nurse",
    pet: pets[12]._id,
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
