import { UserProps } from "../context/auth";
import useAuth from "../hooks/useAuth";
import Button from "./Button";

function Header({ user }: { user: UserProps | undefined }) {
  const { logout } = useAuth();
  if (user === undefined) {
    return;
  }
  return (
    <div className="w-full h-32 flex items-center justify-between px-8 bg-cover bg-pattern mb-4">
      <img src="./logo.png" className="size-24" />
      <div className="flex flex-col space-y-2 group">
        <span className="text-3xl font-semibold">
          {user.name.split(" ")[0]}
        </span>
        <div className="invisible group-hover:visible transition-all duration-200 ease-in-out">
          <Button.Root onClick={logout} type="button">
            <Button.Content text="Sair" />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}

export default Header;
