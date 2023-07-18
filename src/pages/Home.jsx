import "./Home.css";

import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";



const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-contact");
  };



  return (

    <div className="home">
      <div className="title">
        <h1>Contact List</h1>
        <button className="add" onClick={handleClick}>Add New Contact</button>
      </div>

      <div style={{ width: "100%"}}>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
