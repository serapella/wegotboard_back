import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/categories" element={<h1>Categories</h1>} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
