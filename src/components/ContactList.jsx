import "./ContactList.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {

  const [isLoading , setIsLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
        setIsLoading(false)
      } catch (e) {
        console.log(e);
      }
    };
    getContacts();
  }, []);


  const delHandler = async (id) =>{

    await axios.delete(`${CONTACTS_API}/${id}`)
    .then (response => {
      setContacts(contacts.filter((contact)=>contact.id !== id));

    })
    .catch (error => {
      console.log(error);
    })}


    if (isLoading) {
      return ( <p> ... LOADING </p> )
    }

  return (
    <div className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <Contact id={id} key={id} name={name} number={number} onDelete={()=>delHandler(id)}/>
      ))}
    </div>
  );
};

export default ContactList;
