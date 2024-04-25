import { Lock, LogIn } from "lucide-react";

interface ButtonIconProps {
  icon: "login" | "password";
}

export default function ButtonIcon({ icon }: ButtonIconProps) {
  if (icon === "login") {
    return <LogIn  />;
  }
  return <Lock  />;
}
