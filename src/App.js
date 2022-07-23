import "./App.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import CartPage from "./Pages/Cart/CartPage";
import Category from "./Pages/Category/Category";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
