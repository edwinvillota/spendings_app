import { IsEmail, IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { User } from "../../entities/user.entity";

@InputType()
export class CredentialsInput implements Pick<User, "email" | "password"> {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @IsNotEmpty()
  password!: string;
}
