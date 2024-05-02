import { Loader2 } from "lucide-react";

interface LoadingProps {
  size: "md" | "lg";
}
function Loading({ size }: LoadingProps) {
  return (
    <div className="animate-spin">
      <div className="animate-pulse">
        <Loader2 className="" size={size === "lg" ? 48 : 24} />
      </div>
    </div>
  );
}

export default Loading;
