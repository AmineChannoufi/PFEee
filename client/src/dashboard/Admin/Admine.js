import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Admine.css";

function Admine() {
    const [data, setData] = useState([]);
    useEffect(async () => {
      await axios.get("http://localhost:3001/select/users").then((res) => {
        setData(res.data);
      });
    });
  
    const nav = useNavigate();
    const deleteContact = (id) => {
        if (window.confirm("are you sure to delete this user ?")) {
          console.log(id);
          axios.delete(`http://localhost:3001/delete/user/${id}`);
        
        }
      };
  return (
      //   <div className="navigaton">
      // <center><h1>Admin dashboard</h1></center>
      // <Link to="/AddAdmin ">
      //      <div className="btn btn-delete">
      //          Add new Admin
      //      </div>
      //      </Link>
      //   <br></br>
      //   <Link to="/SuivieFeedback ">
      //      <div className="btn btn-delete">
      //          Feedback
      //      </div>
      //      </Link>
      //      <br></br>
      //   <Link to="/GererUtilisateur ">
      //      <div className="btn btn-delete">
      //      Gerer Utilisateur
      //      </div>
      //      </Link>
       
      // </div>
      <>
      <div className="navigaton">
        <Navbar.Brand href="#"> </Navbar.Brand>
  <nav className="item">
    
    <ul className="uu">

    <li>
          <Link exact to="/AddAdmin" activeClassName="nav-active">
          AddAdmin
          </Link>
        </li>
        <br></br>
        <li>
          <Link exact to="/SuivieFeedback" activeClassName="nav-active">
          SuivieFeedback
          </Link>
        </li>
        <br></br>

        <li>
          <Link exact to="/GererUtilisateur" activeClassName="nav-active">
          GererUtilisateur
          </Link>
        </li>
        

        </ul> 
        </nav>
        <center><h1>admin dashboard</h1></center>

      </div>
    </>
  
  )
}

export default Admine