export type ProductFilter = {
  language?: string;
  category?: string | object;
  price?: object;
  playerCount?: {
    min?: object;
    max?: object;
  };
  difficulty?: ["easy", "medium", "hard"];
  duration?: ["short", "medium", "long"];
  ageRating?: object;
  tags?: object;
};
