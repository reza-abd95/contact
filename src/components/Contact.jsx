import "./Contact.css";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";


const Contact = ({ name, number , id , onDelete}) => {



  return (
      <div className="card">
        <div className="details">
          <p className="detail">Name :  <span className="titles"> {name}</span> </p>
          <p className="detail">Number :  <span className="titles"> {number}</span> </p>

        </div>
        <div className="btns">
          <NavLink className={"navlink"} to={`/contacts/${id}`} > More Details </NavLink>
          <button onClick={onDelete}>delete</button>
          <Link to={`/edit/${id}`}><button>Edit</button></Link>
        </div>

      </div>

  );
};

export default Contact;
