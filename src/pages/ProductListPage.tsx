import { Filter } from "../components/Filter";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";

const ProductListPage = () => {
  return (
    <div>
      <Layout>
        <ProductGrid />
        <Filter />
      </Layout>
    </div>
  );
};
export default ProductListPage;
