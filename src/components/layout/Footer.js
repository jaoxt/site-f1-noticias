import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h4>F1 Notícias</h4>
          <p className={styles.muted}>Notícias, análises e calendário — Tudo sobre Fórmula 1.</p>
        </div>
        <div className={styles.social}>
          <a href="#" aria-label="instagram"><FaInstagram/></a>
          <a href="#" aria-label="facebook"><FaFacebook/></a>
          <a href="#" aria-label="twitter"><FaTwitter/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
