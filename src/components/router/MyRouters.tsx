import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateLayout from "../../layout/PrivateLayout";
import PublicLayout from "../../layout/PublicLayout";
import HomeView from "../../pages/home-pages/HomeView";
import PasswordResetPage from "../../pages/password-reset-page/PasswordResetPage";
import SignInPage from "../../pages/signin-page/SignInPage";
import SignUpPage from "../../pages/signup-page/SignUpPage";
const MyRouters = () => {
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
};

export default MyRouters;
