import { Filter } from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import SortBy from "../components/SortBy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setProducts, setTotalPages } from "../store/paginationSlice";
import { useGetProductsQuery } from "../store/productAPI";
import { ProductQuery } from "../types";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, products } = useSelector(
    (state: RootState) => state.productGrid
  );
  const { selectedSort } = useSelector((state: RootState) => state.sort);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const { categories, priceRange, playerCount, duration, difficulty, age } =
    useSelector((state: RootState) => state.filter || {});
  // console.log("Redux state - Products:", products);

  const filters: ProductQuery = {
    categories: Object.keys(categories).filter(
      (category) => categories[category]
    ),
    priceRange: priceRange || {},
    playerCount:
      Object.keys(playerCount).filter((count) => playerCount[count]) || "",
    duration: Object.keys(duration).find((time) => duration[time]) || "",
    difficulty:
      Object.keys(difficulty).find((level) => difficulty[level]) || "",
    age,
  };
  const { data: fetchedProducts } = useGetProductsQuery(filters);

  useEffect(() => {
    if (fetchedProducts) {
      console.log("Fetched products:", fetchedProducts);
      dispatch(setProducts(fetchedProducts));
      dispatch(
        setTotalPages(Math.ceil(fetchedProducts.length / productsPerPage))
      );
    }
    console.log("Products length:", products.length, productsPerPage);
    console.log("Filters: ", filters);
  }, [fetchedProducts, productsPerPage]);

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(products.length / productsPerPage)));
  }, [productsPerPage]);

  useEffect(() => {
    if (selectedSort === "ascending") {
      dispatch(setProducts([...products].sort((a, b) => a.price - b.price)));
    } else if (selectedSort === "descending") {
      dispatch(setProducts([...products].sort((a, b) => b.price - a.price)));
    } else if (selectedSort === "rating") {
      dispatch(
        setProducts(
          [...products].sort((a, b) => {
            const avgA =
              a.userRating.reduce((a, b) => a + b, 0) / a.userRating.length;
            const avgB =
              b.userRating.reduce((a, b) => a + b, 0) / b.userRating.length;
            return avgB - avgA;
          })
        )
      );
    }
  }, [selectedSort]);

  return (
    <div>
      <SortBy />
      <ProductGrid products={products.slice(startIndex, endIndex)} />
      <Filter />
      <Pagination />
    </div>
  );
};
export default ProductListPage;
