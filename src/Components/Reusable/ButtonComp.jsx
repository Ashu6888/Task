import React from "react";
import styles from "./ButtonComp.css";

const ButtonComp = ({ label, onClick }) => {
  return (
    <button className={styles.active} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonComp;
