import styles from "../css_modules/productCard.module.css";
// import { BsCart3, BsStarFill } from "react-icons/bs";
import ProductCardInfo from "./ProductCardInfo";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);
  return (
    <div className={styles.popular_item}>
      <img src={product.images[0]} alt="" />
      <ProductCardInfo product={product} />
    </div>
  );
};

export default ProductCard;
