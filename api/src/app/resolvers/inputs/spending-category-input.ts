import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IncomeCategory } from "../../entities/income-category.entity";

@InputType()
export class SpendingCategoryInput implements Pick<IncomeCategory, "name"> {
  @Field()
  @IsNotEmpty()
  name!: string;
}
