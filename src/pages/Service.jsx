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
            image="https://i.pinimg.com/1200x/1b/9c/47/1b9c47e805caee98125fa93476484f88.jpg" 
          />
          <Card 
            title="Corporate Events" 
            description="Professional and seamless events for businesses." 
            image="https://i.pinimg.com/1200x/5d/9e/af/5d9eaf182108df7c98595d438fcb9ae2.jpg" 
          />
          <Card 
            title="Private Parties" 
            description="Celebrating milestones and moments with style." 
            image="https://i.pinimg.com/1200x/a1/25/f7/a125f7e2ad20e39519f58d310e2ed886.jpg" 
          />
        </div>
      </section>

      <section className={styles.pastWorkSection}>
        <Title text="Our Past Work" />
        <div className={styles.cardsGrid}>
          <Card 
            title="Elegant Wedding" 
            description="A beautiful ceremony with timeless details." 
            image="https://i.pinimg.com/736x/78/d9/69/78d9693f90c86b5b51c728bb45d65b5f.jpg" 
          />
          <Card 
            title="Corporate Gala" 
            description="A sophisticated event for top executives." 
            image="https://i.pinimg.com/736x/78/b5/56/78b556fc5b6b00275657bb67e39e813f.jpg" 
          />
          <Card 
            title="Birthday Celebration" 
            description="Fun and memorable birthday events." 
            image="https://i.pinimg.com/1200x/df/a2/77/dfa2778c06727d399b8391583de38231.jpg" 
          />
        </div>
      </section>

      <section className={styles.finalDescription}>
        <p>
          Our dedication to creativity, precision, and elegance ensures every event we plan is unforgettable. Let EverBloom Events bring your vision to life.
        </p>
      </section>
    </div>
  );
}

export default Service;
