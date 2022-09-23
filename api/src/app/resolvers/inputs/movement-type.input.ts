import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Field, InputType } from "type-graphql";
import { MovementType } from "../../entities/movement-type.entity";
import { MovementDirectionEnum } from "../../types/movement-direction.enum";

@InputType()
export class MovementTypeInput
  implements Pick<MovementType, "name" | "direction">
{
  @Field()
  @IsNotEmpty()
  name!: string;

  @Field((type) => MovementDirectionEnum)
  @IsEnum(MovementDirectionEnum)
  direction!: MovementDirectionEnum;
}

@InputType()
export class MovementTypeUpdateInput
  implements Pick<MovementType, "name" | "direction">
{
  @Field({ nullable: true })
  @IsOptional()
  name!: string;

  @Field({ nullable: true })
  @IsOptional()
  direction!: MovementDirectionEnum;
}
