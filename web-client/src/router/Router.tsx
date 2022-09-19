import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasicTemplate } from "@templates/basic-template/basic-template";
import { BasicTemplateAlignEnum } from "@templates/basic-template/basic-template.types";
import { LoginScreen } from "@/screens/login/login-screen";
import { DashboardScreen } from "@/screens/dashboard/dashboard-screen";
import { PrivateRoute } from "@/common/auth/components/private-route/private-route";

export const Router = () => (
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
        <Route index element={<LoginScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<DashboardScreen />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
