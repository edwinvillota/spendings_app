import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Income } from "../../entities/income.entity";

@InputType()
export class IncomeInput
  implements Pick<Income, "name" | "value" | "categoryId">
{
  @Field()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsNumber()
  @Min(1)
  value!: number;

  @Field()
  @IsNumber()
  categoryId!: number;
}
