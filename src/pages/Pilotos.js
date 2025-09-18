import React from "react";
import { pilotos } from "../dados/dados";
import PilotoCard from "../components/pilotos/PilotoCard";

function Pilotos() {
  return (
    <div>
      <h1>Pilotos & Equipes</h1>
      <p style={{ color:"var(--muted)" }}>Conheça os pilotos em destaque.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))", gap:"1rem", marginTop:"1rem" }}>
        {pilotos.map(p => <PilotoCard key={p.id} piloto={p} />)}
      </div>
    </div>
  );
}

export default Pilotos;
