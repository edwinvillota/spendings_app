import { IsEmail, IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { User } from "../../entities/user.entity";

@InputType()
export class UserInput implements Pick<User, "name" | "email"> {
  @Field()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsEmail()
  email!: string;
}
