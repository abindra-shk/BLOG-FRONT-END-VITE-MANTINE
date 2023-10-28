import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../layouts/Dashboard.layout";
import { LandingLayout } from "../layouts/Landing.layout";
import { SignupScreen } from "../pages/auth/Signup.screen";
import { SignInScreen } from "../pages/auth/SignIn.screen";
import { BlogPage } from "../layouts/BlogPage.layout.tsx";
import { Fyp } from "../pages/authenticated/fyp.tsx";
const MainRoute = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LandingLayout />} />
      <Route path={"/dashboard"} element={<DashboardLayout />} />
      <Route path={"/dashboard/*"} element={<DashboardLayout />} />
      <Route path={"/blog-page/:blogId"} element={<BlogPage />} />
      <Route path={"/signup"} element={<SignupScreen />} />
      <Route path={"/signin"} element={<SignInScreen />} />
      <Route path={"/fyp"} element={<Fyp />} />
    </Routes>
  );
};

export default MainRoute;
