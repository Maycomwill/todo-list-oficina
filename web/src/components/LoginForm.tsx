import { FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    login(email, password);
  }
  if (isLoading) {
    return <Loading size="lg" />;
  }
  return (
    <form className="w-[100%] flex flex-col items-center justify-center md:min-h-screen px-16 space-y-4 bg-slate-900">
      <Input.Root>
        <Input.Content
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Digite seu email:"
          placeholder="Ex: example@example.com"
          type="email"
        />
        <Input.Icon icon={"user"} />
      </Input.Root>
      <Input.Root>
        <Input.Content
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Digite sua senha:"
          placeholder="Ex: ******"
          type="password"
        />
        <Input.Icon icon={"password"} />
      </Input.Root>

      <Button.Root onClick={handleLogin} type="submit">
        <Button.Content text="ENTRAR" />
      </Button.Root>
    </form>
  );
}
