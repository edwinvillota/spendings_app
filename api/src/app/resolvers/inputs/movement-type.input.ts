import { IsEnum, IsNotEmpty } from "class-validator";
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
