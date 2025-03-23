import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductDetailPage from "./pages/productDetailPage";

import LandingPage from "./pages/LandingPage";
import ShoppingCart from "./components/ShoppingCart";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<></>} />
          <Route path="/products/:id/:slug" element={<ProductDetailPage />} />
          <Route path="/categories" element={<></>} />
          <Route path="/user/login" element={<></>} />
          <Route path="/user/register" element={<></>} />
          <Route path="/user/logout" element={<></>} />
          <Route path="/user/wishlist" element={<></>} />
          <Route
            path="/cart"
            element={
              <>
                <ShoppingCart />
              </>
            }
          />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
