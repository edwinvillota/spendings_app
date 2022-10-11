import { useQuery } from "@apollo/client";
import { GET_MOVEMENT_TYPES } from "./movement-type.queries";
import { GetMovementTypesData } from "./movement-type.types";

export const useGetMovementTypes = () => {
  return useQuery<GetMovementTypesData>(GET_MOVEMENT_TYPES);
};
