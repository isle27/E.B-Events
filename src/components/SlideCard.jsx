import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./SlideCard.module.css";

function SlideCard({
  image1, title1, description1,
  image2, title2, description2,
  image3, title3, description3
}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.Carousel}
      fade
    >
      <Carousel.Item>
        <div className={styles.slideWrapper}>
          <img src={image1} alt="First slide" className={styles.carouselImage} />
          <div className={styles.textOverlay}>
            <h3>{title1}</h3>
            <p>{description1}</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className={styles.slideWrapper}>
          <img src={image2} alt="Second slide" className={styles.carouselImage} />
          <div className={styles.textOverlay}>
            <h3>{title2}</h3>
            <p>{description2}</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className={styles.slideWrapper}>
          <img src={image3} alt="Third slide" className={styles.carouselImage} />
          <div className={styles.textOverlay}>
            <h3>{title3}</h3>
            <p>{description3}</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideCard;
