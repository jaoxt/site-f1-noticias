import React from "react";
import styles from "./PilotoCard.module.css";

function PilotoCard({ piloto }) {
  return (
    <div className={styles.card}>
      <img src={piloto.foto} alt={piloto.nome} />
      <div className={styles.info}>
        <h4>{piloto.nome}</h4>
        <p className={styles.equipe}>{piloto.equipe} • #{piloto.numero}</p>
        <button className="btn" style={{ marginTop: "0.6rem" }}>Ver perfil</button>
      </div>
    </div>
  );
}

export default PilotoCard;