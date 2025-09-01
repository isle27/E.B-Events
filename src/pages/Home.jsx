import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import SlideCard from "../components/SlideCard";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from"./Home.module.css";

function Home() {

  return (
    <div className={styles.container}>
      <Title text="Welcome to My Site" subtitle="Check out our latest content" />
      <Title text="Featured Cards" />

       <SlideCard
        image1="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg"
        title1="First Slide"
        description1="This is the first slide description."
        image2="https://images.pexels.com/photos/20151736/pexels-photo-20151736.jpeg"
        title2="Second Slide"
        description2="This is the second slide description."
        image3="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg"
        title3="Third Slide"
        description3="This is the third slide description."
      />

      <div className={styles.cardRow}>
        <div className={styles.cardSection}>
          <Card
            image="/245yohNN.jpg"
            title="Card One"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>See-Through Card</h3>
          <p>
            This card has a transparent glass-like effect. You can add any
            description here to highlight something special or provide
            additional context.
            This card has a transparent glass-like effect. You can add any
            description here to highlight something special or provide
            additional context.
          </p>
        </div>
        <div className={styles.cardSection}>
          <Card
            image="/245yohNN.jpg"
            title="Card One"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>See-Through Card</h3>
          <p>
            This card has a transparent glass-like effect. You can add any
            description here to highlight something special or provide
            additional context.
            This card has a transparent glass-like effect. You can add any
            description here to highlight something special or provide
            additional context.
          </p>
        </div>
         <div className={styles.cardSection}>
          <Card
            image="/245yohNN.jpg"
            title="Card One"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>See-Through Card</h3>
          <p>
            This card has a transparent glass-like effect. You can add any
            description here to highlight something special or provide
            additional context.
            This card has a transparent glass-like effect. You can add any
            description here to highlight something special or provide
            additional context.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
