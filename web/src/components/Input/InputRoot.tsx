import { ReactNode } from "react";

export default function InputRoot({ children }: { children: ReactNode }) {
  return <div className="flex flex-col space-y-2 relative w-full">{children}</div>;
}
