import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../assets/ChatGPT_AM-removebg-preview.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" ><img src={Logo} alt="Logo" /></Link>
      </div>
      <div className={styles.buttonSec}>
        
        <Link to="/"><Button text="Home" /></Link>
        <Link to="/AboutUs"><Button text="About Us" /></Link>
        <Link to="/Service"><Button text="Our Service" /></Link>
        <Link to="/BookUs"><Button text="Book Us" /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
