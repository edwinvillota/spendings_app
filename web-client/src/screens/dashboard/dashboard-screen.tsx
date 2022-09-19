import useAuthContext from "@/common/auth/hooks/use-auth-context";
import { Button } from "@/components/atoms/button/button";
import { ButtonTypeEnum } from "@/components/atoms/button/button.types";

export const DashboardScreen = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <Button preset={ButtonTypeEnum.Primary} onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
};
