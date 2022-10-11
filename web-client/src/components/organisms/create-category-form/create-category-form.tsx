import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/input";
import { useGetMovementTypes } from "@/domains/movement-types/movement-type.hooks";
import Styled from "./create-category-form.styles";

export const CreateCategoryForm = () => {
  const { data } = useGetMovementTypes();

  return (
    <Styled.Form>
      <Input placeholder="Name" label="Name" required />
      <Input placeholder="Movement type" label="Movement type" required />
      <Button>Add</Button>
      {data?.getMovementTypes.map((movementType) => (
        <span key={movementType.id}>{movementType.name}</span>
      ))}
    </Styled.Form>
  );
};
