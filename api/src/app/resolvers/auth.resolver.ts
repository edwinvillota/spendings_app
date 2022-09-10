import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ContextType } from "../common/interfaces/context-type";
import { User } from "../entities/user.entity";
import { AuthService } from "../services/auth.service";
import { AccessToken } from "../types/access-token";
import { CredentialsInput } from "./inputs/credentials-input";

@Service()
@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Authorized()
  @Query(() => User)
  async getLoggedUser(@Ctx() context: ContextType) {
    return context.user;
  }

  @Mutation(() => AccessToken)
  async login(@Arg("input") input: CredentialsInput) {
    return await this.authService.login(input);
  }
}
