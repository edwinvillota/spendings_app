import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from "class-validator";
import { Field, InputType } from "type-graphql";
import { Movement } from "../../entities/movement.entity";

@InputType()
export class MovementInput
  implements Pick<Movement, "name" | "categoryId" | "date" | "value">
{
  @Field()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsInt()
  categoryId!: number;

  @Field()
  @IsDate()
  date!: Date;

  @Field()
  @IsNumber()
  value!: number;
}

@InputType()
export class MovementUpdateInput
  implements Pick<Movement, "name" | "categoryId" | "date" | "value">
{
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  name!: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  categoryId!: number;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  date!: Date;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  value!: number;
}
