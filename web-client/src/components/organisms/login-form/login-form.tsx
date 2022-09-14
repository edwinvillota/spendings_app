import { Input } from "@atoms/input/input";
import { Button } from "@atoms/button/button";
import { Form } from "./login-form.styles";
import { ButtonTypeEnum } from "@/components/atoms/button/button.types";

export const LoginForm = () => {
  return (
    <Form>
      <h1>Form</h1>
      <Input placeholder="Username" label="Username" />
      <Input placeholder="Password" label="Password" type="password" />
      <Button preset={ButtonTypeEnum.Primary}>SignIn</Button>
    </Form>
  );
};
