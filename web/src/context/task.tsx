import { createContext, ReactNode, useState } from "react";
import api from "../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

export interface TaskProps {
  name: string;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  id: string;
  userId: string;
}

export interface TaskContextProps {
  getTasks: (id: string) => void;
  deleteTask: (id: string) => void;
  createTask: (name: string, id: string) => void;
  updateTask: (id: string, isCompleted: boolean) => void;
  isLoading: boolean;
  tasks: TaskProps[];
}

export const TaskContext = createContext({} as TaskContextProps);

export function TaskContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  async function getTasks(id: string) {
    try {
      setIsLoading(true);
      const tasks = await api.get(`/task/user/${id}`);

      setIsLoading(false);
      setTasks(tasks.data.data);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        return alert(error.message);
      }
    }
  }

  async function createTask(name: string, id: string) {
    try {
      const newTask = await api.post("/task", {
        name,
        userId: id,
      });
      toast.success(newTask.data.message);
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.message);
      }
    }
  }

  async function updateTask(id: string, isCompleted: boolean) {
    try {
      const update = await api.patch("/task", {
        id,
        isCompleted,
      });

      toast.success(update.data.message);
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.message);
      }
    }
  }

  async function deleteTask(id: string) {
    try {
      const deleteTask = await api.delete(`/task/${id}`);

      toast.success(deleteTask.data.message);
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.message);
      }
    }
  }
  return (
    <TaskContext.Provider
      value={{ getTasks, deleteTask, createTask, updateTask, tasks, isLoading }}
    >
      {children}
    </TaskContext.Provider>
  );
}
