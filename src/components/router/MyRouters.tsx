import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../../ecommerce-app/client/components/navbar/Navbar";
import PrivateLayout from "../../layout/PrivateLayout";
import PublicLayout from "../../layout/PublicLayout";
import HomeView from "../../pages/home-pages/HomeView";
import PasswordResetPage from "../../pages/password-reset-page/PasswordResetPage";
import SignInPage from "../../pages/signin-page/SignInPage";
import SignUpPage from "../../pages/signup-page/SignUpPage";
import styles from "./styles.module.scss";
import Signin from "../../ecommerce-app/client/pages/auth/signin/Signin";
import Signup from "../../ecommerce-app/client/pages/auth/signup/Signup";
import Products from "../../ecommerce-app/client/pages/products/Products";
import ProductDetail from "../../ecommerce-app/client/pages/products/product-detail/ProductDetail";
import UsersList from "../../ecommerce-app/client/pages/users/users-list/UsersList";
import UserProfile from "../../ecommerce-app/client/pages/users/user-profile/UserProfile";
import { ProtectedRoute } from "./ProtectedRouter";
import { useUserStateContext } from "../../ecommerce-app/client/contexts/AuthContext";
/* const MyRouters = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="pages" element={<div>PRIVATE</div>} />
        </Route>

        <Route element={<PublicLayout />}>
         <Route path="*" element={<Navigate replace to="/login" />} /> 
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="password-reset" element={<PasswordResetPage />} />
        </Route>
      </Routes>
    </Router>
  );
}; */

const MyRouters = () => {
  const user = useUserStateContext();
  return (
    <Router>
      <Navbar />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="product/:product_id" element={<ProductDetail/>} />
          <Route path="/users" element={<UsersList/>} />
          <Route path="/profile" element={
            <ProtectedRoute isAllowed = {user.isLoggin} redirectPath="/">
              <UserProfile/>
            </ProtectedRoute>
          } />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default MyRouters;
