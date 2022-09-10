import { AuthChecker } from "type-graphql";
import Container, { Inject, Service } from "typedi";
import { AuthService } from "../../services/auth.service";
import { ContextType } from "../interfaces/context-type";

@Service()
export class CustomAuthChecker {
  private authService: AuthService;

  constructor() {
    this.authService = Container.get(AuthService);
  }

  check: AuthChecker<ContextType> = async ({ root, args, context, info }) => {
    const authorizationHeader = context.req.headers.authorization || "";
    const [bearer, token] = authorizationHeader.split(" ");

    if (!token) return false;

    try {
      const authenticatedUser = await this.authService.verifyToken(
        token.trim()
      );

      if (authenticatedUser) {
        context.user = authenticatedUser;
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
