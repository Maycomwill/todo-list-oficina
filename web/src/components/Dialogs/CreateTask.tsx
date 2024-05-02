import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button";
import { X } from "lucide-react";
import { FormEvent, useState } from "react";
import Input from "../Input";
import { useTasks } from "../../hooks/useTasks";

function CreateTask({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { createTask } = useTasks();

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();
    createTask(name, id);
    setName("");
    setOpen(false);
  }
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <Button.Root type="button" onClick={() => setOpen(true)}>
          <Button.Content text="Criar tarefa" />
        </Button.Root>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20" />
        <Dialog.Content className="fixed inset-0 z-10 flex w-full flex-col overflow-hidden bg-pattern bg-cover text-zinc-100 outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[60vh] md:max-w-[640px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md">
          <Dialog.Close className="roudend-md absolute right-0 top-0 bg-blue-900 p-1.5 text-blue-100 hover:text-red-600">
            <X className="size-5" onClick={() => setOpen(false)} />
          </Dialog.Close>
          <form onSubmit={handleCreateTask} className="w-full pt-12">
            <div className="px-8">
              <Input.Root>
                <Input.Content
                  value={name}
                  onChange={(text) => setName(text.target.value)}
                  label="Digite o nome da tarefa"
                  placeholder="Ex: Beber 2L de água"
                  type="text"
                />
              </Input.Root>
            </div>
            <div className="fixed bottom-0 w-full">
              <Button.Root type="submit">
                <Button.Content text="Criar" />
              </Button.Root>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CreateTask;
