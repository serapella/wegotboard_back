import { Filter } from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const ProductListPage = () => {
  return (
    <div>
      <ProductGrid />
      <Filter />
      <Pagination />
    </div>
  );
};
export default ProductListPage;
