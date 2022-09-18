import {
  AuthActionsEnum,
  AuthContextActions,
  AuthContextState,
} from "../context/auth-context.types";

export const AuthReducer = (
  state: AuthContextState,
  action: AuthContextActions
): AuthContextState => {
  switch (action.type) {
    case AuthActionsEnum.LOGIN_REQUEST:
      return {
        ...state,
        user: undefined,
        loading: true,
      };
    case AuthActionsEnum.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
      };
    case AuthActionsEnum.LOGIN_FAILURE:
      return {
        ...state,
        user: undefined,
        authenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
