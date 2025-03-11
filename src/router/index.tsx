
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import LuggagePage from "../pages/LuggagePage";
import HardPartsPage from "../pages/HardPartsPage";
import CustomBuiltPage from "../pages/CustomBuiltPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="luggage" element={<LuggagePage />} />
          <Route path="hard-parts" element={<HardPartsPage />} />
          <Route path="custom-built" element={<CustomBuiltPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
