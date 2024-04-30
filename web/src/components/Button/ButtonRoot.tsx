import { ReactNode } from "react";

function ButtonRoot({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded space-x-2 flex items-center justify-center bg-blue-950 py-2 px-4 hover:bg-blue-800 transition-colors duration-250 ease-in-out">
      {children}
    </div>
  );
}

export default ButtonRoot;
