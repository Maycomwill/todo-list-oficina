import { useContext } from "react";
import { TaskContext, TaskContextProps } from "../context/task";

export function useTasks(): TaskContextProps {
  const context = useContext(TaskContext);
  return context;
}
