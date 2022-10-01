import { Request } from "express";
import { ContainerInstance } from "typedi";
import { User } from "../../entities/user.entity";

export interface ContextType {
  container: ContainerInstance;
  requestId: string;
  req: Request;
  user: User;
}
