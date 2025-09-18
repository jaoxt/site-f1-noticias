// dados/dados.js
export const noticias = [
  {
    id: 1,
    titulo: "Lewis Hamilton vence GP da Itália em corrida emocionante",
    resumo: "Hamilton conquistou sua 104ª vitória em uma prova marcada por ultrapassagens e estratégia de pneus.",
    conteudo: "Conteúdo completo do artigo: Local, voltas decisivas, citações e análises táticas...",
    imagem: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=60",
    data: "2025-09-14"
  },
  {
    id: 2,
    titulo: "Max Verstappen lidera treinos livres e mostra favoritismo",
    resumo: "Verstappen registrou o melhor tempo nos treinos, deixando claro o ritmo da equipe.",
    conteudo: "Análise do desempenho, set-up do carro e expectativas para a classificação.",
    imagem: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=60",
    data: "2025-09-13"
  },
  {
    id: 3,
    titulo: "Ferrari anuncia novidades aerodinâmicas para o fim da temporada",
    resumo: "Pequenas mas significativas alterações na asa traseira prometem ganho de performance.",
    conteudo: "Detalhes técnicos das mudanças, comentários da equipe e impacto esperado.",
    imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60",
    data: "2025-09-10"
  }
];

export const corridas = [
  { id:1, gp: "GP do Brasil", local: "Interlagos, São Paulo", data: "2025-11-02", bandeira: "BR" },
  { id:2, gp: "GP de Abu Dhabi", local: "Yas Marina", data: "2025-12-07", bandeira: "AE" },
  { id:3, gp: "GP de Monza", local: "Itália", data: "2025-09-14", bandeira: "IT" }
];

export const pilotos = [
  { id:1, nome: "Max Verstappen", equipe: "Red Bull Racing", numero: 1, foto: "https://via.placeholder.com/300x200?text=Verstappen" },
  { id:2, nome: "Lewis Hamilton", equipe: "Mercedes", numero: 44, foto: "https://via.placeholder.com/300x200?text=Hamilton" },
  { id:3, nome: "Charles Leclerc", equipe: "Ferrari", numero: 16, foto: "https://via.placeholder.com/300x200?text=Leclerc" }
];
