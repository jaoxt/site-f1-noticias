import React from "react";
import { corridas } from "../dados/dados";
import CorridaCard from "../components/calendario/CorridaCard";

function Calendario() {
  const ordenadas = [...corridas].sort((a,b)=> new Date(a.data) - new Date(b.data));
  return (
    <div>
      <h1>Calendário de Corridas</h1>
      <p style={{ color:"var(--muted)" }}>Próximas etapas do campeonato.</p>
      <div style={{ display:"grid", gap:"0.8rem", marginTop:"1rem" }}>
        {ordenadas.map(c => <CorridaCard key={c.id} corrida={c} />)}
      </div>
    </div>
  );
}

export default Calendario;
