import React from "react";
import CardNoticia from "./CardNoticia";

function ListaNoticias({ lista }) {
  return (
    <div style={{ display:"grid", gap:"1rem" }}>
      {lista.map((n) => (
        <CardNoticia key={n.id} noticia={n} />
      ))}
    </div>
  );
}

export default ListaNoticias;