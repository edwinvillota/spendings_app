import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Spending } from "../../entities/spending.entity";

@InputType()
export class SpendingInput
  implements Pick<Spending, "name" | "value" | "categoryId">
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
