import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasicTemplate } from "@templates/basic-template/basic-template";
import { BasicTemplateAlignEnum } from "@templates/basic-template/basic-template.types";
import { LoginScreen } from "@/screens/login/login-screen";

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
      </Route>
    </Routes>
  </BrowserRouter>
);
