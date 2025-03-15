export type ProductFilter = {
  language?: string;
  category?: string | object;
  price?: object;
  playerCount?: object;
  difficulty?: ["easy", "medium", "hard"];
  age?: object;
  tags?: object;
};
