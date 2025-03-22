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
  categories: Category[];
  difficulty: "easy" | "medium" | "hard";
  duration: "short" | "medium" | "long";
  image: string[];
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

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface NewsFeed {
  items: NewsItem[];
  total: number;
  page: number;
  limit: number;
}

export interface PopularProductsProps {
  variant?: "landing" | "detail";
}

export interface ProductGridProps {
  products: Product[];
  maxItems?: number;
  variant?: "landing" | "detail";
}

export interface ProductCardProps {
  variant?: "landing" | "detail";
  product?: Product;
}
