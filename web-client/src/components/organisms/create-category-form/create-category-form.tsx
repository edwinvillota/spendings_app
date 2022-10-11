import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/input";
import Styled from "./create-category-form.styles";

export const CreateCategoryForm = () => {
  return (
    <Styled.Form>
      <Input placeholder="Name" label="Name" required />
      <Input placeholder="Movement type" label="Movement type" required />
      <Button>Add</Button>
    </Styled.Form>
  );
};
