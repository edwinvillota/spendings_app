import { BasicTemplate } from "@/components/templates/basic-template/basic-template";
import { BasicTemplateAlignEnum } from "@/components/templates/basic-template/basic-template.types";

export const HomeScreen = () => {
  return (
    <BasicTemplate
      alignHorizontal={BasicTemplateAlignEnum.Left}
      alignVertical={BasicTemplateAlignEnum.Top}
    >
      <h1>Home</h1>
    </BasicTemplate>
  );
};
