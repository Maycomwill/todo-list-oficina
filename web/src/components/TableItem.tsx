import { formatDistanceToNow } from "date-fns";
import { TaskProps } from "../context/task";
import { ptBR } from "date-fns/locale";
import UpdateTask from "./Dialogs/UpdateTask";
import DeleteTask from "./Dialogs/DeleteTask";
import clsx from "clsx";

function TableItem({ task }: { task: TaskProps }) {
  return (
    <tr
      key={task.id}
      className={clsx(
        "odd:bg-slate-900 even:bg-slate-800 border-b even:hover:bg-slate-700 dark:border-slate-700 odd:hover:bg-slate-800 transition-colors duration-200 ease-in-out",
        {
          "odd:bg-emerald-800/40 even:bg-emerald-800/40 even:hover:bg-emerald-700/40 odd:hover:bg-emerald-700/40":
            task.isCompleted !== false,
        }
      )}
    >
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {task.name}
      </th>
      <td className="px-6 py-4">
        {formatDistanceToNow(task.updatedAt, {
          addSuffix: true,
          locale: ptBR,
        })}
      </td>
      <td className="px-6 py-4">{task.isCompleted === true ? "Sim" : "Não"}</td>
      <td className="px-6 py-4 space-x-4">
        <UpdateTask task={task} />
        <DeleteTask task={task} />
      </td>
    </tr>
  );
}

export default TableItem;
