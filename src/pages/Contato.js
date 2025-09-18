import React, { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();
    console.log("Contato enviado:", { nome, email, mensagem });
    setEnviado(true);
    setNome(""); setEmail(""); setMensagem("");
  }

  return (
    <div style={{ maxWidth:720 }}>
      <h1>Contato</h1>
      <p style={{ color:"var(--muted)" }}>Envie feedback, sugestões de pauta ou erratas.</p>

      {!enviado ? (
        <form onSubmit={enviar} style={{ display:"grid", gap:"0.8rem", marginTop:"1rem" }}>
          <input value={nome} onChange={(e)=>setNome(e.target.value)} required placeholder="Seu nome" style={{ padding:"0.6rem", borderRadius:8, border:"1px solid rgba(255,255,255,0.06)", background:"transparent", color:"var(--text)" }} />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Seu e-mail" type="email" style={{ padding:"0.6rem", borderRadius:8, border:"1px solid rgba(255,255,255,0.06)", background:"transparent", color:"var(--text)" }} />
          <textarea value={mensagem} onChange={(e)=>setMensagem(e.target.value)} required rows="6" placeholder="Sua mensagem" style={{ padding:"0.6rem", borderRadius:8, border:"1px solid rgba(255,255,255,0.06)", background:"transparent", color:"var(--text)" }} />
          <button className="btn" type="submit">Enviar</button>
        </form>
      ) : (
        <div style={{ marginTop:"1rem", padding:"1rem", background:"var(--card)", borderRadius:8 }}>
          <h3>Mensagem enviada</h3>
          <p style={{ color:"var(--muted)" }}>Obrigado! Responderemos em breve.</p>
          <button className="btn" onClick={()=>setEnviado(false)}>Enviar outra</button>
        </div>
      )}
    </div>
  );
}

export default Contato;
