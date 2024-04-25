import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "submit" | "button";
}

export default function ButtonContent({ text, type, ...rest }: ButtonProps) {
  return (
    <button className="outline-none" type={type} {...rest}>
      {text}
      
    </button>
  );
}
