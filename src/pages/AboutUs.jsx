import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      
      <Title text="About us and our History" subtitle="Check out our latest content" />
      <Title text="Featured Cards" />

      <section className={styles.intro}>
        <p>
          EverBloom Events is dedicated to creating unforgettable moments with elegance, style, and attention to detail. 
          From weddings to corporate events, we craft experiences that leave a lasting impression.
        </p>
      </section>

      <section className={styles.cardsSection}>
        <Card 
          title="Weddings" 
          description="We plan your perfect day, down to every detail." 
          image="https://i.pinimg.com/1200x/be/c0/6e/bec06e4e6337618cafc3628ce064e5c2.jpg" 
        />
        <Card 
          title="Corporate Events" 
          description="Professional and seamless events for your business needs." 
          image="https://images.pexels.com/photos/12954015/pexels-photo-12954015.jpeg" 
        />
        <Card 
          title="Private Parties" 
          description="Celebrate milestones and special moments in style." 
          image="https://i.pinimg.com/1200x/e9/75/bb/e975bb5f26f7711732b8178e22827b67.jpg" 
        />
      </section>
       <section className={styles.history}>
        <p>
         EverBloom Events is not just an event planning company—it is a full-spectrum experience creator, dedicated to making every occasion extraordinary. What sets us apart is our ability to offer a wide range of services tailored to meet the specific needs of each client. From intimate gatherings to grand celebrations, we specialize in crafting events that reflect elegance, style, and an unwavering attention to detail.
Our uniqueness lies in the breadth and flexibility of our offerings. We provide exquisite décor for any event type, transforming venues into stunning spaces that capture the essence of your vision. Whether it’s a wedding, corporate function, birthday, or social gathering, our décor options range from timeless elegance to modern sophistication, ensuring that every setting leaves a lasting impression.
        </p>
      </section>

       <section className={styles.cardsSection}>
        <Card 
          title="Weddings" 
          description="We plan your perfect day, down to every detail." 
          image="https://i.pinimg.com/1200x/be/c0/6e/bec06e4e6337618cafc3628ce064e5c2.jpg" 
        />
        <Card 
          title="Corporate Events" 
          description="Professional and seamless events for your business needs." 
          image="https://images.pexels.com/photos/12954015/pexels-photo-12954015.jpeg" 
        />
        <Card 
          title="Private Parties" 
          description="Celebrate milestones and special moments in style." 
          image="https://i.pinimg.com/1200x/e9/75/bb/e975bb5f26f7711732b8178e22827b67.jpg" 
        />
      </section>
       <section className={styles.history}>
        <p>EverBloom Events also offers comprehensive catering services. Our chefs craft menus with an endless array of options, from gourmet multi-course meals to casual buffet-style setups, designed to satisfy every palate. For those looking for a more personalized experience, we provide bar services or drink catering, tailored to complement your event perfectly.

To ensure your event runs seamlessly, we offer rental services for high-quality chairs, tables, linens, and other essentials. Our team can coordinate these individually or as part of a complete full-service package, giving you the flexibility to choose the level of support you need. Whether you want us to handle every detail or simply assist with specific elements, we approach each service with the same dedication, precision, and care.
        </p>
      </section>

      
    </div>
  );
}

export default AboutUs;
