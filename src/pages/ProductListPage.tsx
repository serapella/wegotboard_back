import { Filter } from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import SortBy from "../components/SortBy";

const ProductListPage = () => {
  return (
    <div>
      <SortBy />
      <ProductGrid />
      <Filter />
      <Pagination />
    </div>
  );
};
export default ProductListPage;
