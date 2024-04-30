import { FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import useAuth from "../hooks/useAuth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    login(email, password);
  }
  if (isLoading) {
    return <p>Carregando...</p>;
  }
  return (
    <form className="w-[80%] px-4 space-y-4">
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

      <Button.Root>
        <Button.Content onClick={handleLogin} text="ENTRAR" type="submit" />
      </Button.Root>
    </form>
  );
}
