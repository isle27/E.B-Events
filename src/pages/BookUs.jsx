import React, { useState } from "react";
import styles from "./BookUs.module.css";
import Card from "../components/Card";
import BookingForm from "../components/BookForm";
import E from "../assets/e.png"

const BookUs = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleBook = (serviceTitle) => {
    setSelectedService({ title: serviceTitle });
  };

  const handleClose = () => setSelectedService(null);

  return (
    <div className={styles.bookUsPage}>
      <h1 className={styles.title}>Book Us</h1>
      <p className={styles.description}>
        Choose the service you’d like to book.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.cardWrapper}>
          <Card
            image="https://i.pinimg.com/736x/72/06/e5/7206e5967afa233a716bafc8617168ba.jpg"
            title="Decoration Service"
            description="Quality tables and chairs for your guests."
          />
          <button
            className={styles.bookButton}
            onClick={() => handleBook("Chair & Table Rental Service")}
          >
            Book Now
          </button>
        </div>

        <div className={styles.cardWrapper}>
          <Card
            image="https://i.pinimg.com/1200x/36/48/cf/3648cf5b2a171d465cf241607a67600b.jpg"
            title="Catering/Endless menu Service"
            description="Beautiful decorations for any event."
          />
          <button
            className={styles.bookButton}
            onClick={() => handleBook("Decoration Service")}
          >
            Book Now
          </button>
        </div>
        <div className={styles.cardWrapper}>
          <Card
            image="https://i.pinimg.com/736x/68/7d/01/687d010b610af9c51a60868469630d35.jpg"
            title="Chair & Table Rental Service"
            description="Beautiful decorations for any event."
          />
          <button
            className={styles.bookButton}
            onClick={() => handleBook("Decoration Service")}
          >
            Book Now
          </button>
        </div>
        <div className={styles.cardWrapper}>
          <Card
            image="https://i.pinimg.com/736x/89/7a/aa/897aaaf7c29764b0b3fca825e31a66b8.jpg"
            title="Bar Service"
            description="Beautiful decorations for any event."
          />
          <button
            className={styles.bookButton}
            onClick={() => handleBook("Decoration Service")}
          >
            Book Now
          </button>
        </div>
        <div className={styles.cardWrapper}>
          <Card
            image={E}
            title="Full Package Service"
            description="Beautiful decorations for any event."
          />
          <button
            className={styles.bookButton}
            onClick={() => handleBook("Decoration Service")}
          >
            Book Now
          </button>
        </div>

       
      </div>

      {selectedService && (
        <div className={styles.formOverlay}>
          <div className={styles.formWrapper}>
            <button className={styles.closeButton} onClick={handleClose}>
              ✕
            </button>
            <BookingForm service={selectedService} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookUs;
