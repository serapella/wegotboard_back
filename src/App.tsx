import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductDetailPage from "./pages/productDetailPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/products" element={<ProductDetailPage />} />
          <Route path="/categories" element={<></>} />
          <Route path="/user/login" element={<></>} />
          <Route path="/user/register" element={<></>} />
          <Route path="/user/logout" element={<></>} />
          <Route path="/user/wishlist" element={<></>} />
          <Route path="/cart" element={<></>} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
