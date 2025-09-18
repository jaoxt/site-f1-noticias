import React from "react";
import { noticias } from "../dados/dados";
import ListaNoticias from "../components/news/ListaNoticias";

function Home() {
  const ultimas = noticias.slice(0,3);
  return (
    <div>
      <section style={{ marginBottom:"1.4rem" }}>
        <div style={{ display:"grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
          <div style={{ position:"relative", borderRadius:12, overflow:"hidden" }}>
            <img src={ultimas[0].imagem} alt="banner" style={{ width:"100%", height:320, objectFit:"cover" }} />
            <div style={{ position:"absolute", left:20, bottom:20 }}>
              <h1 style={{ margin:0 }}>{ultimas[0].titulo}</h1>
              <p style={{ color:"var(--muted)" }}>{ultimas[0].resumo}</p>
              <a className="btn" href={`/noticias#${ultimas[0].id}`} style={{ marginTop:8 }}>Ler destaque</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Últimas notícias</h2>
        <ListaNoticias lista={ultimas} />
      </section>
    </div>
  );
}

export default Home;
