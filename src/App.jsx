import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import  ContactEdit  from "./pages/ContactEdit";
import ContactDetail from "./pages/ContactDetail";

function App() {
  return (
    
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/edit/:id" element={<ContactEdit />}/>
        <Route path="/contacts/:id" element={<ContactDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
