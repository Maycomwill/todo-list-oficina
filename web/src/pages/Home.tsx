import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import CreateTask from "../components/Dialogs/CreateTask";
import UpdateTask from "../components/Dialogs/UpdateTask";
import DeleteTask from "../components/Dialogs/DeleteTask";

export default function Home() {
  const { getTasks, tasks } = useTasks();
  const id = window.localStorage.getItem("oficina-id");
  useEffect(() => {
    if (id !== null) {
      getTasks(id);
    }
  }, []);
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <div>
        <ul>
          {tasks.length !== 0
            ? tasks.map((task) => {
                let completed = "";
                if (task.isCompleted === false) {
                  completed = "Não";
                }
                completed = "Sim";

                return (
                  <li>
                    <div>
                      <p>
                        {task.name} | {completed} | {task.updatedAt}
                      </p>
                      <UpdateTask task={task} />
                      <DeleteTask task={task} />
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
        <CreateTask id={String(id)} />
      </div>
    </div>
  );
}
