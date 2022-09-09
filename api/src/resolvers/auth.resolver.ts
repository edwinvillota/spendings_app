import { Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { User } from "../entities/user.entity";
import { AccessToken } from "../types/access-token";

@Service()
@Resolver(() => User)
export class AuthResolver {
  @Mutation(() => AccessToken)
  async login() {
    return { token: "lajsdlfjsalf" };
  }
}
