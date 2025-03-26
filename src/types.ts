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
  ageMin?: number;
  ageMax?: number;
  search?: string;
}

export interface Product {
  _id: string;
  language: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  userRating: number[];
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
  email: string;
  name: {
    first: string;
    last: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    region: string;
  };
  phone: string;
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
  first: string;
  last: string;
  email: string;
  password: string;
  pnumber: string;
  address: string;
  city: string;
  pcode: string;
  country: string;
  region: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface ApiError {
  status: number;
  data: {
    message: string;
    error?: string;
  };
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

// User API Types
export interface UserApiResponse extends ApiResponse<User> {}
export interface UserListResponse extends ApiResponse<User[]> {}
export interface AuthResponse extends ApiResponse<UserResponse> {}

// Mutation Response Types
export interface MutationResponse<T> {
  data?: T;
  error?: ApiError;
}

export interface UserMutationResponse extends MutationResponse<User> {}
export interface AuthMutationResponse extends MutationResponse<UserResponse> {}

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
