import { AuthChecker } from "type-graphql";
import Container, { Service } from "typedi";
import { AuthService } from "../../services/auth.service";
import { ContextType } from "../interfaces/context-type";

@Service()
export class CustomAuthChecker {
  private authService: AuthService;

  constructor() {
    this.authService = Container.get(AuthService);
  }

  check: AuthChecker<ContextType> = async ({ context }) => {
    return Boolean(context.user);
  };
}
