import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import CreateTask from "../components/Dialogs/CreateTask";
import Header from "../components/Header";
import Loading from "../components/Loading";
import TableItem from "../components/TableItem";

export default function Home() {
  const { getTasks, tasks, isLoading } = useTasks();
  const { user } = useAuth();
  const id = window.localStorage.getItem("oficina-id");
  useEffect(() => {
    if (id !== null) {
      getTasks(id);
    }
  }, []);

  return (
    <div>
      <Header user={user} />
      <div className="w-full items-center justify-center flex flex-col space-y-4">
        {isLoading ? (
          <Loading size="lg" />
        ) : (
          <table className="sm:rounded-lg overflow-hidden w-full md:w-[70%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <td scope="col" className="px-6 py-3">
                  Atualizada em
                </td>
                <td scope="col" className="px-6 py-3">
                  Concluída
                </td>
                <td scope="col" className="px-6 py-3">
                  Ações
                </td>
              </tr>
            </thead>
            <tbody>
              {tasks.length !== 0
                ? tasks.map((task) => {
                    return <TableItem key={task.id} task={task} />;
                  })
                : null}
            </tbody>
          </table>
        )}
        <div>
          <CreateTask id={String(id)} />
        </div>
      </div>
    </div>
  );
}
