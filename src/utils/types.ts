export type ProductFilter = {
  language?: string;
  category?: string | object;
  price?: object;
  playerCount?: object;
  difficulty?: ["easy", "medium", "hard"];
  age?: object;
  tags?: object;
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
