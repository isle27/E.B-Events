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
            image="https://i.pinimg.com/736x/99/91/c2/9991c20d1b47768922bcf8bd0e3c3acf.jpg"
            title="Catering/Endless menu"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>Catering Service & Full Menu Service</h3>
          <p>
            Our catering service is designed to transform any event into a memorable dining experience. Whether you are hosting an intimate gathering, a wedding celebration, or a large corporate function, we bring together exceptional flavors, professional presentation, and seamless service.
We offer a full menu service that can be tailored to the unique character of your occasion. From timeless classics to contemporary dishes, our culinary team prepares meals with fresh ingredients and thoughtful attention to detail. Guests can enjoy everything from elegant hors d’oeuvres and multi-course plated dinners to abundant buffet spreads and live food stations, depending on the atmosphere you want to create.
Every menu is flexible and customizable, ensuring that dietary needs, cultural preferences, and personal tastes are fully respected. Our team also coordinates the service style—whether formal or relaxed—to match the tone of your event. With a dedicated staff that manages setup, service, and clean-up, you can focus on enjoying your celebration while we handle the details.
          </p>
        </div>
        <div className={styles.cardSection}>
          <Card
            image="https://i.pinimg.com/736x/75/48/ac/7548acc6d4c49c49edd7dd203f125f24.jpg"
            title="Our Decoration"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>Event Decoration Service</h3>
          <p>
            Our decoration service is crafted to bring beauty, harmony, and atmosphere to any occasion. We believe that every event tells a story, and the setting should reflect that story with elegance and style. Whether it’s a wedding, birthday, anniversary, gala, or corporate gathering, we design spaces that feel both inviting and unforgettable.
From the grandest centerpieces to the smallest finishing touches, our team carefully balances color, texture, and form to create a seamless look. We work with a wide range of styles—classic, modern, romantic, rustic, or bold and contemporary—ensuring your vision is brought to life with precision and artistry.
Our services include floral arrangements, table settings, stage and backdrop design, lighting, drapery, and custom décor elements tailored to your theme. Every detail is thoughtfully chosen to enhance the atmosphere, creating a setting that is not only visually stunning but also aligned with the tone and purpose of your event.
With us, decoration is more than just aesthetics—it’s the art of transforming an ordinary space into an extraordinary experience your guests will remember.
          </p>
        </div>
         <div className={styles.cardSection}>
          <Card
            image="https://i.pinimg.com/1200x/04/3f/5e/043f5eff2793f0026d85b9a7b9647891.jpg"
            title="Bar Service"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>Bar Service</h3>
          <p>
            Our bar service brings sophistication, energy, and a touch of celebration to any event. Whether you’re planning a wedding reception, a milestone party, or a corporate gathering, we create a bar experience that is both professional and inviting.

We offer a full range of options, from classic cocktails and fine wines to craft beers, mocktails, and signature drinks tailored to your event. Each menu is customizable, allowing you to feature timeless favorites or unique creations that reflect your personality or theme. Our bartenders are skilled not only in mixing and serving but also in providing warm, attentive hospitality that keeps guests comfortable and engaged.

Beyond beverages, we handle the details that make your bar service seamless—glassware, mixers, garnishes, setup, and clean-up—so you can focus on enjoying your event. Whether you prefer a full-service bar, a specialty cocktail station, or a refined non-alcoholic menu, we bring professionalism and polish to every pour.

Our goal is simple: to elevate your event with a bar service that blends flavor, style, and impeccable service, leaving your guests with a lasting impression of quality and celebration.
          </p>
        </div>
         <div className={styles.cardSection}>
          <Card
            image="https://i.pinimg.com/736x/72/06/e5/7206e5967afa233a716bafc8617168ba.jpg"
            title="Chair & Table Rental Service"
            description="This is the first simple card."
          />
        </div>

       
        <div className={styles.transparentCard}>
          <h3>Chair & Table Rental Service</h3>
          <p>
            The right furniture sets the foundation for any successful event, and our chair and table rental service ensures your guests are welcomed into a space that feels both comfortable and refined. We provide a wide variety of styles to suit every occasion—whether you are hosting an elegant wedding, a formal gala, a casual family celebration, or a corporate function.

Our collection includes everything from classic banquet chairs and round dining tables to rustic farmhouse sets, sleek modern designs, and versatile options for outdoor gatherings. Each piece is carefully maintained to guarantee quality, durability, and style, no matter the setting.

We understand that every event has its own personality, which is why we offer flexible combinations and layouts tailored to your vision. Our team assists with delivery, setup, and arrangement, ensuring the furniture complements your décor and enhances the overall atmosphere.

Whether you need a handful of tables for an intimate dinner or a full setup for a large celebration, our rental service provides reliable, elegant solutions that transform your space into a welcoming environment for guests to gather, dine, and enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
