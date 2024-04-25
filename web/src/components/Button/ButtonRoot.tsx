import { ReactNode } from "react";

function ButtonRoot({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-48 rounded space-x-2 flex items-center justify-center bg-red-500 py-2 px-4 hover:bg-red-400 transition-colors duration-250 ease-in-out">
      {children}
    </div>
  );
}

export default ButtonRoot;
