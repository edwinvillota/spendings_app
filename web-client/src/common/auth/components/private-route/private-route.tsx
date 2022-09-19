import { Loader } from "@/components/atoms/loader/loader";
import { BasicTemplate } from "@/components/templates/basic-template/basic-template";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/use-auth-context";

export const PrivateRoute = () => {
  const { authenticated, loading } = useAuthContext();
  const location = useLocation();

  if (loading)
    return (
      <BasicTemplate>
        <Loader />
      </BasicTemplate>
    );

  if (!authenticated)
    return <Navigate to={"/login"} state={{ from: location }} />;

  return <Outlet />;
};
