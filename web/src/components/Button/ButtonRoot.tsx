import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "submit" | "button";
}

function ButtonRoot({ children, type, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full rounded space-x-2 flex items-center justify-center bg-blue-950 py-2 px-4 hover:bg-blue-800 transition-colors duration-250 ease-in-out"
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonRoot;
