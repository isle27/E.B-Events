// Service.jsx
import React from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import styles from "./Service.module.css";

function Service() {
  return (
    <div className={styles.serviceContainer}>
    
      <section className={styles.header}>
        <Title text="Our Services" />
        <p className={styles.description}>
          At EverBloom Events, we specialize in creating unforgettable moments tailored to your needs. From intimate gatherings to grand celebrations, our team ensures every detail is perfect.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <Title text="What We Offer" />
        <div className={styles.cardsGrid}>
          <Card 
            title="Weddings" 
            description="Planning every detail of your special day to perfection." 
            imageUrl="/images/wedding.jpg" 
          />
          <Card 
            title="Corporate Events" 
            description="Professional and seamless events for businesses." 
            imageUrl="/images/corporate.jpg" 
          />
          <Card 
            title="Private Parties" 
            description="Celebrating milestones and moments with style." 
            imageUrl="/images/party.jpg" 
          />
        </div>
      </section>

      <section className={styles.pastWorkSection}>
        <Title text="Our Past Work" />
        <div className={styles.cardsGrid}>
          <Card 
            title="Elegant Wedding" 
            description="A beautiful ceremony with timeless details." 
            imageUrl="/images/past1.jpg" 
          />
          <Card 
            title="Corporate Gala" 
            description="A sophisticated event for top executives." 
            imageUrl="/images/past2.jpg" 
          />
          <Card 
            title="Birthday Celebration" 
            description="Fun and memorable birthday events." 
            imageUrl="/images/past3.jpg" 
          />
        </div>
      </section>

      {/* Final Short Description */}
      <section className={styles.finalDescription}>
        <p>
          Our dedication to creativity, precision, and elegance ensures every event we plan is unforgettable. Let EverBloom Events bring your vision to life.
        </p>
      </section>
    </div>
  );
}

export default Service;
