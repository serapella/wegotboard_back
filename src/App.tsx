import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/productDetailPage";
import LandingPage from "./pages/LandingPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id/:slug" element={<ProductDetailPage />} />
          <Route path="/categories" element={<></>} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/register" element={<></>} />
          <Route path="/user/logout" element={<></>} />
          <Route
            path="/user/wishlist"
            element={
              <>
                <WishlistPage />
              </>
            }
          />
          <Route path="/cart" element={<></>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
