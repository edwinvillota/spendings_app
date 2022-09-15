import { Input } from "@atoms/input/input";
import { Button } from "@atoms/button/button";
import { ButtonTypeEnum } from "@/components/atoms/button/button.types";
import { Form, Title } from "./login-form.styles";
import { useMutation } from "@apollo/client";
import { LOGIN } from "@/graphql/mutations/login.mutation";

export const LoginForm = () => {
  const [login, { error, data, loading }] = useMutation<
    {
      login: {
        token: string;
      };
    },
    { input: { email: string; password: string } }
  >(LOGIN, {
    variables: {
      input: { email: "edwinvillota3@hotmail.com", password: "123456" },
    },
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <Title>Login Form</Title>

      <Input placeholder="Username" label="Username" />
      <Input placeholder="Password" label="Password" type="password" />
      <Button preset={ButtonTypeEnum.Primary} type="submit" loading={loading}>
        SignIn
      </Button>
    </Form>
  );
};
