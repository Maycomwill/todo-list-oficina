import { InputHTMLAttributes } from "react";

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "email" | "password";
  placeholder: string;
  label: string;
}

export default function InputContent({
  type,
  placeholder,
  label,
  ...rest
}: InputContentProps) {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input
        className="outline-none focus-visible:ring-2 ring-lime-400 bg-slate-700 w-full px-4 py-2 rounded"
        type={type}
        id={type}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
