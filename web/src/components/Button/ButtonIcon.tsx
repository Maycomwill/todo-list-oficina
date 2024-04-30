import { ClipboardEdit, Lock, LogIn, Trash2 } from "lucide-react";

interface ButtonIconProps {
  icon: "login" | "password" | "clipboard" | "trash";
}

export default function ButtonIcon({ icon }: ButtonIconProps) {
  if (icon === "login") {
    return <LogIn />;
  }
  if (icon === "trash") {
    return <Trash2 />;
  }
  if (icon === "clipboard") {
    return <ClipboardEdit />;
  }
  return <Lock />;
}
