import { AuthChecker } from "type-graphql";
import Container from "typedi";
import { ContextType } from "../interfaces/context-type";

export const authChecker: AuthChecker<ContextType> = (
  { root, args, context, info },
  roles
) => {
  const token = context.req?.headers?.authorization || "";

  if (!token) return false;

  return true;
};
