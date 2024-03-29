import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Adherent from "./pages/Adherent";
import Pres from "./pages/Presentation";
import Login from "./pages/Login";
import Admin from "./dashboard/Commercial/Commercial";
import Normal from "./dashboard/Adherent/Normal";
import Contact from "./pages/Contact";
// import SuivieDemande from "./dashboard/SuivieDemande";
import Presentation from "./pages/Presentation";
// import Details from "./dashboard/Details";
// import AddEdiT from "./dashboard/AddEdiT";
// import View from "./dashboard/View";
import UpdateUser from "./dashboard/Adherent/UpdateUser";
import Edit from "./dashboard/Commercial/Edit";
import Vieww from "./dashboard/Commercial/Vieww";
import Suivie from "./dashboard/Adherent/Suivie";
import Affiche from "./dashboard/Adherent/Affiche";
import Aff from "./dashboard/Admin/Aff";
import Edite from "./dashboard/Admin/Edite";
import Demande from "./dashboard/Adherent/Demande";
import AddAdmin from "./dashboard/Admin/AddAdmin";
import Forgot from "./pages/Forgot";
import Feedback from "./dashboard/Adherent/Feedback";
import SuivieFeedback from "./dashboard/Admin/SuivieFeedback";
import ViewFeedBack from "./dashboard/Admin/ViewFeedBack";
import AdherentFeedback from "./dashboard/Adherent/AdherentFeedback";
import Repondre from "./dashboard/Admin/Repondre";
import GererUtilisateur from "./dashboard/Admin/GererUtilisateur";


function App() {
  return (
    <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/Normal" element={<Normal />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/" element={<Home/>} />
            <Route path="/Presentation" element={<Presentation/>} />
            <Route path="/Adherent" element={<Adherent/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Normal/:id" element={<Normal/>} />
            <Route path="/Contact" element={<Contact/>} />
            
            <Route path="/Vieww/:id" element={<Vieww />} />
            <Route path="/update/:id" element={<UpdateUser />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/Suivie" element={<Suivie />} />
            <Route path="/Affiche/:id" element={<Affiche />} />
            <Route path="/Aff/:id" element={<Aff />} />
            <Route path="/Edite/:id" element={<Edite />} />
            <Route path="/Demande" element={<Demande />} />
            <Route path="/AddAdmin" element={<AddAdmin />} />
           <Route path="/Forgot" element={<Forgot />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/SuivieFeedback" element={<SuivieFeedback />} />
            <Route path="/ViewFeedBack/:id" element={<ViewFeedBack />} />
            <Route path="/Repondre/:id" element={<Repondre />} />
            
            <Route path="/AdherentFeedback" element={<AdherentFeedback />} />
            <Route path="/GererUtilisateur" element={<GererUtilisateur />} />

            

















    </Routes>
  );
}

export default App;
