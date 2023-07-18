import "./ContactForm.css";

import { useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";
import axios from "axios";
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", number: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="phone number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <button type="submit">Add</button>
          <NavLink className={"navlink"} to={`/`} > Back </NavLink>

        </div>
      </form>
    </>
  );
};

export default ContactForm;
