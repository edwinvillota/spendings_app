import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasicTemplate } from "@templates/basic-template/basic-template";
import { BasicTemplateAlignEnum } from "@templates/basic-template/basic-template.types";
import { LoginScreen } from "@/screens/login/login-screen";
import { DashboardScreen } from "@/screens/dashboard/dashboard-screen";
import { PrivateRoute } from "@/common/auth/components/private-route/private-route";
import { SidemenuTemplate } from "@/components/templates/sidemenu-template/sidemenu-template";
import { useState } from "react";
import { CategoriesScreen } from "@/screens/categories/categories-screen";
import { CategoryDetailsScreen } from "@/screens/category-details/category-details";
import { HomeScreen } from "@/screens/home/home-screen";

export const Router = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BasicTemplate
              alignHorizontal={BasicTemplateAlignEnum.Center}
              alignVertical={BasicTemplateAlignEnum.Center}
            />
          }
        >
          <Route index element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route element={<PrivateRoute />}>
            <Route
              element={
                <SidemenuTemplate
                  isMenuOpen={isMenuOpen}
                  onClose={() => setIsMenuOpen(false)}
                  onOpen={() => setIsMenuOpen(true)}
                />
              }
            >
              <Route path="dashboard" element={<DashboardScreen />} />
              <Route path="categories" element={<CategoriesScreen />} />
            </Route>
            <Route path="category/:id" element={<CategoryDetailsScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
