import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "@/pages/Landing";
import { LoginPage } from "@/pages/Login";
import { RegisterPage } from "@/pages/Register";
import { HomePage } from "@/pages/Home";
import { RecipeDetailPage } from "@/pages/RecipeDetails";
import { ProfilePage } from "@/pages/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
