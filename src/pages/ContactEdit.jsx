import "./ContactEdit.css";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { useNavigate , NavLink } from "react-router-dom";
import axios from "axios";
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactEdit = () => {
  const  {id} = useParams();
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false);



  useEffect(() => {
        setIsLoading(true)
        axios.get(`${CONTACTS_API}/${id}`)
        .then(response => {
            setContacts(response.data)
            setIsLoading(false)

        })
        .catch(error => {
            console.log(error);
        });
  }, [])

  const { name, number } = contacts;



  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.put(`${CONTACTS_API}/${id}`, contacts);
      setContacts({ name: "", number: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return ( <p> ... LOADING </p> )
  }
  return (
    <div className="form-edit">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={contacts.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="phone number"
            type="tel"
            name="number"
            value={contacts.number}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <button type="submit">Edit</button>
          <NavLink className={"navlink"} to={`/`} > Back </NavLink>

        </div>
      </form>
    </div>
  );
};

export default ContactEdit;
