import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ContactDetail.css";

import axios from "axios";
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactDetail = () => {
  const [contacts, setContacts] = useState([]);
  const {id} = useParams();



  useEffect(() => {

    axios.get(`${CONTACTS_API}/${id}`)

        .then(response => {
            setContacts(response.data)

        })
        .catch(error => {
            console.log(error);
        });
}, [])

console.log(contacts)




  return (
    <div className="contact-detail">
      <div className="title"> name : <span className="res" >{contacts.name}</span> </div>
      <div className="title"> Phone Number : <span className="res" >{contacts.number}</span> </div>
      <NavLink className={"navlink"} to={`/`} > Back </NavLink>

    </div>
  );
};

export default ContactDetail;
