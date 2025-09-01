import React from "react";
import styles from "./Title.module.css";

function Title({ text, subtitle }) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{text}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default Title;
