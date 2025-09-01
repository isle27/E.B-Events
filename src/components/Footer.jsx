import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
       
        <div className={styles.section}>
          <h2 className={styles.logo}>EverBloom Events</h2>
          <p className={styles.about}>
            Crafting timeless celebrations with elegance, sophistication, and unforgettable details.
          </p>
        </div>

        
        <div className={styles.section}>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.links}>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Contact</h3>
          <p>Phone: +251 900 000 000</p>
          <p>Email: info@everbloomevents.com</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} EverBloom Events. Elegance that lasts forever.</p>
      </div>
    </footer>
  );
}

export default Footer;
