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
        image1="/pexels-asadphoto-169185.jpg"
        title1="First Slide"
        description1="This is the first slide description."
        image2="/pexels-change-c-c-974768353-32689482.jpg"
        title2="Second Slide"
        description2="This is the second slide description."
        image3="/pexels-nano-erdozain-120534369-20151736.jpg"
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
