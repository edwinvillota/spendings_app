import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Category } from "../../entities/category.entity";

@InputType()
export class CategoryInput
  implements Pick<Category, "name" | "movementTypeId">
{
  @Field()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsNumber()
  movementTypeId!: number;
}

@InputType()
export class CategoryUpdateInput
  implements Pick<Category, "name" | "movementTypeId">
{
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  name!: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  movementTypeId!: number;
}
