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
  categories?: string;
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
  overview: {
    features: string[];
    components: string[];
    packaging: string;
  };
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

export interface User {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  user: User;
  product: string;
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateReviewDto {
  rating: number;
  review: string;
}

export interface ReviewResponse {
  reviews: Review[];
  total: number;
  page: number;
  limit: number;
}

export interface Cart {
  itemList: CartItem[];
  totalQuantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
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

// Authentication Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}
