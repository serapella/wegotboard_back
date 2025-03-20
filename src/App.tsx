import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<></>} />
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
