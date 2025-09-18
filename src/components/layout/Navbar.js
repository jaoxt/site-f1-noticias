import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/"><span className={styles.logoIcon}>🏁</span> <span className={styles.logoText}>F1 Notícias</span></Link>
        </div>
        <nav>
          <ul className={styles.menu}>
            <li className={location.pathname === "/" ? styles.active : ""}><Link to="/">Home</Link></li>
            <li className={location.pathname === "/noticias" ? styles.active : ""}><Link to="/noticias">Notícias</Link></li>
            <li className={location.pathname === "/calendario" ? styles.active : ""}><Link to="/calendario">Calendário</Link></li>
            <li className={location.pathname === "/pilotos" ? styles.active : ""}><Link to="/pilotos">Pilotos</Link></li>
            <li className={location.pathname === "/contato" ? styles.active : ""}><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
