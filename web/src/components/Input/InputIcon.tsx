import { Lock, User } from "lucide-react";

interface InputIconProps {
  icon: "user" | "password";
}

export default function InputIcon({ icon }: InputIconProps) {
  if (icon === "user") {
    return <User className="absolute right-2 top-[45%]" />;
  }
  return <Lock className="absolute right-2 top-[45%]" />;
}
