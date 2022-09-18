import { Input } from "@atoms/input/input";
import { Button } from "@atoms/button/button";
import { ButtonTypeEnum } from "@/components/atoms/button/button.types";
import { Form, Title } from "./login-form.styles";
import { useLogin } from "@/graphql/hooks/use-login/use-login";
import { useForm } from "react-hook-form";
import { LoginFormData } from "./login-form.types";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [login, { loading, error }] = useLogin();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(({ email, password }) =>
    login({
      variables: {
        input: {
          email,
          password,
        },
      },
      onCompleted(data) {
        const token = data.login.token;

        if (token) {
          localStorage.setItem("token", token);
          navigate("/dashboard", { replace: true });
        }
      },
    })
  );

  return (
    <Form onSubmit={onSubmit}>
      <Title>Login Form</Title>

      <Input
        placeholder="Username"
        label="Username"
        type="email"
        required
        error={error?.message}
        {...register("email")}
      />
      <Input
        placeholder="Password"
        label="Password"
        type="password"
        required
        error={error?.message}
        {...register("password")}
      />
      <Button preset={ButtonTypeEnum.Primary} type="submit" loading={loading}>
        SignIn
      </Button>
    </Form>
  );
};
