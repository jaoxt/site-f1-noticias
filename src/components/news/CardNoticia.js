import React from "react";
import styles from "./CardNoticia.module.css";

function CardNoticia({ noticia, mostrarLink = true }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagemWrapper}>
        <img src={noticia.imagem} alt={noticia.titulo} />
      </div>
      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{noticia.titulo}</h3>
        <p className={styles.resumo}>{noticia.resumo}</p>
        <div className={styles.meta}>
          <span>{new Date(noticia.data).toLocaleDateString()}</span>
          {mostrarLink && <a className={styles.leiaMais} href={`/noticias#${noticia.id}`}>Ler mais</a>}
        </div>
      </div>
    </article>
  );
}

export default CardNoticia;
