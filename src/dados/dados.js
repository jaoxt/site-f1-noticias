// dados/dados.js
export const noticias = [
  {
    id: 1,
    titulo: "Lewis Hamilton vence GP da Itália em corrida emocionante",
    resumo: "Hamilton conquistou sua 104ª vitória em uma prova marcada por ultrapassagens e estratégia de pneus.",
    conteudo: "Conteúdo completo do artigo: Local, voltas decisivas, citações e análises táticas...",
    imagem: "https://s.rfi.fr/media/display/e629ec92-1097-11ea-b7b5-005056a99247/w:1024/p:16x9/hamilton_monza.jpg",
    data: "2025-09-14"
  },
  {
    id: 2,
    titulo: "Max Verstappen lidera treinos livres e mostra favoritismo",
    resumo: "Verstappen registrou o melhor tempo nos treinos, deixando claro o ritmo da equipe.",
    conteudo: "Análise do desempenho, set-up do carro e expectativas para a classificação.",
    imagem: "https://img.band.com.br/image/2023/06/02/max-verstappen-red-bull-no-tl1-do-gp-da-espanha-2023-9259.jpg",
    data: "2025-09-13"
  },
  {
    id: 3,
    titulo: "Ferrari anuncia novidades aerodinâmicas para o fim da temporada",
    resumo: "Pequenas mas significativas alterações na asa traseira prometem ganho de performance.",
    conteudo: "Detalhes técnicos das mudanças, comentários da equipe e impacto esperado.",
    imagem: "https://terceirotempo.uol.com.br/imagens/98/87/w600_h331_pdt_ft1_209887.webp",
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
