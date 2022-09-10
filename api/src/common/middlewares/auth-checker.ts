import { AuthChecker } from "type-graphql";
import Container from "typedi";
import { AuthService } from "../../services/auth.service";
import { ContextType } from "../interfaces/context-type";

export const authChecker: AuthChecker<ContextType> = async (
  { root, args, context, info },
  roles
) => {
  const authService = Container.get<AuthService>("authService");
  const payload = context.req?.headers?.authorization || "";
  const [bearer, token] = payload.split(" ");

  if (!token) return false;

  try {
    const authenticatedUser = await authService.verifyToken(token.trim());
    if (authenticatedUser) {
      context.user = authenticatedUser;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
