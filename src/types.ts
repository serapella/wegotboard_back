export interface ProductQuery {
  products?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
  priceMax?: number;
  playerMin?: number;
  playerMax?: number;
  tags?: string[];
  categories?: string[];
  difficulty?: string;
  duration?: string;
  search?: string;
}

export interface Product {
  _id: string;
  language: string;
  name: string;
  description: string;
  price: number;
  playerCount: {
    min: number;
    max: number;
  };
  tags: Tag[];
  category: Category;
  difficulty: "easy" | "medium" | "hard";
  duration: "short" | "medium" | "long";
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  _id: string;
  name: string;
}

export interface Category {
  _id: string;
  name: string;
}
export interface NewsFeed {
  items: NewsFeedItem[];
  image: string;
  title: string;
  description: string;
  pubDate: string;
  webMaster: string;
  link: string;
  language: string;
  lastBuildDate: string;
  backdrop: string;
}

export interface NewsFeedItem {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  "dc:creator": string;
  guid: string;
  isoDate: Date;
}
export interface Cart {
  items: CartItem[];
}
export interface CartItem {
  product: Product["_id"];
  quantity: number;
}
