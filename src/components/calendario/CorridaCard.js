import React from "react";
import styles from "./CorridaCard.module.css";

function CorridaCard({ corrida }) {
  const dataFormatada = new Date(corrida.data).toLocaleDateString();
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h4>{corrida.gp}</h4>
        <p className={styles.local}>{corrida.local}</p>
        <p className={styles.data}>{dataFormatada}</p>
      </div>
      <div className={styles.flag}>
        <span className={styles.flagText}>{corrida.bandeira}</span>
      </div>
    </div>
  );
}

export default CorridaCard;
