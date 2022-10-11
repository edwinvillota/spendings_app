import { CreateCategoryForm } from "@/components/organisms/create-category-form/create-category-form";
import { ScreenTemplate } from "@/components/templates/screen-template/screen-template";

export const CreateCategoryScreen = () => {
  return (
    <ScreenTemplate>
      <ScreenTemplate.Header goBack>
        <h1>Create category</h1>
      </ScreenTemplate.Header>
      <CreateCategoryForm />
    </ScreenTemplate>
  );
};
