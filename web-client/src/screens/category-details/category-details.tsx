import { DetailsList } from "@/components/molecules/details-list/details-list";
import { ScreenTemplate } from "@/components/templates/screen-template/screen-template";
import { useGetCategoryById } from "@/domains/categories/category.hooks";
import { useParams } from "react-router-dom";

export const CategoryDetailsScreen = () => {
  const { id } = useParams();
  const { data, loading } = useGetCategoryById(Number(id));

  return (
    <ScreenTemplate loading={loading}>
      <ScreenTemplate.Header goBack>
        <h1>Category Details</h1>
      </ScreenTemplate.Header>
      <DetailsList
        data={data?.getCategoryById}
        items={[
          { label: "Id", getter: (item) => item.id },
          { label: "Name", getter: (item) => item.name },
          { label: "Movement type", getter: (item) => item.movementType.name },
        ]}
      />
    </ScreenTemplate>
  );
};
