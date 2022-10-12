import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/input";
import { Select } from "@/components/atoms/select/select";
import { useGetMovementTypes } from "@/domains/movement-types/movement-type.hooks";
import Styled from "./create-category-form.styles";

export const CreateCategoryForm = () => {
  const { data } = useGetMovementTypes();

  return (
    <Styled.Form>
      <Input placeholder="Name" label="Name" required />
      <Input placeholder="Movement type" label="Movement type" required />
      <Button>Add</Button>

      <Select
        options={data?.getMovementTypes}
        valueExtractor={(option) => option.id}
        labelExtractor={(option) => option.name}
      />
    </Styled.Form>
  );
};
