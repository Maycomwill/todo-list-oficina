import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            <Button.Content
              onClick={() => console.log(email, password)}
              text="ENTRAR"
              type="submit"
            />
            
          </Button.Root>
        </form>
    )
}