import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";
import { setTotalPages } from "../store/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { useGetProductsQuery } from "../store/productAPI";

const ProductGrid = () => {
  const { data: products = [] } = useGetProductsQuery({});
  const dispatch = useDispatch();
  const { currentPage, productsPerPage } = useSelector(
    (state: RootState) => state.productGrid
  );

  useEffect(() => {
    console.log("Products length:", products.length, productsPerPage);
    dispatch(setTotalPages(Math.ceil(products.length / productsPerPage)));
  }, [products]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToDisplay = products.slice(startIndex, endIndex);

  return (
    <div className={styles.product_grid}>
      {productsToDisplay.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
export default ProductGrid;
