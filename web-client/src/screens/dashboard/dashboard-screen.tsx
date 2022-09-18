import useAuthContext from "@/common/auth/hooks/use-auth-context";
import { GET_USERS } from "@/graphql/queries/getUsers.query";
import { useQuery } from "@apollo/client";

export const DashboardScreen = () => {
  const { data } = useQuery<{
    getUsers: [{ id: number; name: string; email: string }];
  }>(GET_USERS);

  const { authenticated, user, loading, error } = useAuthContext();

  return (
    <div>
      <span>Dashboard Screen</span> <br />
      <span>Authenticated: {String(authenticated)}</span> <br />
      <span>Loading: {String(loading)}</span>
      <br />
      <span>Error: {JSON.stringify(error)}</span>
      <br />
      <span>User: {JSON.stringify(user)}</span>
      <br />
    </div>
  );
};
