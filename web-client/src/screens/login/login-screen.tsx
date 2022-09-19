import useAuthContext from "@/common/auth/hooks/use-auth-context";
import { Loader } from "@/components/atoms/loader/loader";
import { BasicTemplate } from "@/components/templates/basic-template/basic-template";
import { LoginForm } from "@organisms/login-form/login-form";
import { Navigate } from "react-router-dom";

export const LoginScreen = () => {
  const { authenticated, loading } = useAuthContext();

  if (loading)
    return (
      <BasicTemplate>
        <Loader />
      </BasicTemplate>
    );
  if (authenticated) return <Navigate to={"/dashboard"} />;
  return <LoginForm />;
};
