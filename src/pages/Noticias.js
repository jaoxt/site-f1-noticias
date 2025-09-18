import React from "react";
import { noticias } from "../dados/dados";
import ListaNoticias from "../components/news/ListaNoticias";

function Noticias() {
  // Ordena por data decrescente
  const listaOrdenada = [...noticias].sort((a,b)=> new Date(b.data) - new Date(a.data));

  return (
    <div>
      <h1>Notícias</h1>
      <p style={{ color:"var(--muted)" }}>Todas as notícias mais recentes sobre Fórmula 1.</p>
      <div style={{ marginTop:"1rem" }}>
        <ListaNoticias lista={listaOrdenada} />
      </div>

      <section style={{ marginTop:"1.4rem" }}>
        <h2>Artigos completos</h2>
        {listaOrdenada.map(n => (
          <article id={n.id} key={n.id} style={{ marginBottom: "1.2rem", padding: "1rem", background: "var(--card)", borderRadius:10 }}>
            <h3>{n.titulo}</h3>
            <p style={{ color:"var(--muted)" }}>{new Date(n.data).toLocaleDateString()}</p>
            <img src={n.imagem} alt={n.titulo} style={{ width:"100%", maxHeight:360, objectFit:"cover", borderRadius:8 }} />
            <p style={{ marginTop:12 }}>{n.conteudo}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Noticias;
