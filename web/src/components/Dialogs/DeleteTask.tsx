import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button";
import { X } from "lucide-react";
import { FormEvent, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { TaskProps } from "../../context/task";

function DeleteTask({ task }: { task: TaskProps }) {
  const [open, setOpen] = useState(false);
  const { deleteTask } = useTasks();

  function handleDeleteTask(e: FormEvent) {
    e.preventDefault();
    deleteTask(task.id);
    setOpen(false);
  }
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger onClick={() => setOpen(true)}>
        <Button.Root>
          <Button.Icon icon="trash"/>
        </Button.Root>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20" />
        <Dialog.Content className="fixed inset-0 z-10 flex w-full flex-col overflow-hidden bg-blue-900 bg-cover text-zinc-100 outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[60vh] md:max-w-[640px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md">
          <Dialog.Close className="roudend-md absolute right-0 top-0 bg-blue-950 p-1.5 text-blue-100 hover:text-red-600">
            <X className="size-5" onClick={() => setOpen(false)} />
          </Dialog.Close>
          <form onSubmit={handleDeleteTask} className="w-full pt-12">
            <div className="px-8 flex-col flex items-center">
              <p>Deseja deletar a tarefa?</p>
            </div>
            <div className="fixed bottom-0 w-full">
              <Button.Root>
                <Button.Content type="submit" text="Deletar" />
              </Button.Root>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DeleteTask;
