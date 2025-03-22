import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";
import { setTotalPages } from "../store/productgridSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
// import { Product } from "../types";
import { useGetProductsQuery } from "../store/productAPI";

const ProductGrid = () => {
  const { data: products = [] } = useGetProductsQuery({});
  const dispatch = useDispatch();
  const { currentPage, productsPerPage } = useSelector(
    (state: RootState) => state.productGrid
  );

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(products.length / productsPerPage)));
  }, []);

  return (
    <div className={styles.product_grid}>
      {products.map((product) => (
        // TODO: Make the ProductCard components here
        <ProductCard key={product._id} product={product} />
        // <p key={product._id}>{product.name}</p>
      ))}
    </div>
  );
};
export default ProductGrid;
