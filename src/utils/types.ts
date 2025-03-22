export type ProductFilter = {
  language?: string;
  category?: string | object;
  price?: object;
  "playerCount.min": object;
  "playerCount.max": object;
  difficulty?: ["easy", "medium", "hard"];
  duration?: ["short", "medium", "long"];
  ageRating?: object;
  tags?: object;
  name?: object;
};

export interface User {
  _id: string;
  email: string;
  name: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
