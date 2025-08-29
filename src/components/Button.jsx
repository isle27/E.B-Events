import React from "react";
import styles from "./Button.module.css";

function Button({ text, style = {}, onClick }) {
  return (
    <div className={styles.btnItem} style={style} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
