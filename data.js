const activities = {
  0: "Poli chinelo",
  1: "Poli chinelo pela frente",
  2: "Corridinha no lugar",
  3: "Agachamento soco no teto",
  4: "Apoio",
  5: "Rema Rema. Deitado abraça perna",
  6: "Abdominal normal",
  7: "Abdominal obliquo",
  8: "Abdominal com as pernas cruzadas no alto",
  9: "Ponte",
  10: "Ponte com uma perna sobre o joelho",
  11: "Passo pra trás",
  12: "Passo pra frente",
  13: "Pranchinha isometria",
  14: "Escalador. Joelho cotovelo",
  15: "Panturrilha",
  16: "Tricepes testa",
  17: "Bicepes",
  18: "Supino",
  19: "Levantamento lateral",
  20: "Levantamento frontal",
  21: "Troca perna",
  22: "Abdominal infra",
};

const alongamento = [
  "Deitado segura as pernas",
  "Estica uma perna e segura a outra",
  "Estica uma perna e segura a outra - troca",
  "Coloca as pernas pro lado",
  "Coloca as pernas pro outro lado",
  "Sentado abre as pernas e tenta alcançar elas",
  "Fecha uma perna e tenta alcançar a outra esticada",
  "Fecha uma perna e tenta alcançar a outra esticada - troca",
];

const treinos = [
  [2, 14, 3, 14, 5, 4, 13],
  [0, 14, 3, 11, 6, 14, 7],
  [0, 3, 5, 6, 0, 3, 5, 6],
  [1, 12, 14, 9, 1, 12, 14, 22],
];

//formato
//8 exercicios total, 5 blocos, 4 - 4 , x4 - x4, 4 - 4, x4 -x4, 4 - x4
// 25 segundos exercicio, 15 intervalo, depois da metade passa pra 10 intervalo
// descanço 1 minuto e meio
