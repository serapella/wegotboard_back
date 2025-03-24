import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/productDetailPage";
<<<<<<< HEAD
import LandingPage from "./pages/LandingPage";
import WishlistPage from "./pages/WishlistPage";
=======
import Login from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import ShoppingCart from "./components/ShoppingCart";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import P404 from "./pages/P404";
>>>>>>> dev
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id/:slug" element={<ProductDetailPage />} />
          <Route path="/categories" element={<></>} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<></>} />
          <Route path="/user/logout" element={<></>} />
<<<<<<< HEAD
          <Route
            path="/user/wishlist"
            element={
              <>
                <WishlistPage />
              </>
            }
          />
          <Route path="/cart" element={<></>} />
=======
          <Route path="/user/wishlist" element={<></>} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<P404 />} />
>>>>>>> dev
        </Routes>
      </Layout>
    </>
  );
};

export default App;
