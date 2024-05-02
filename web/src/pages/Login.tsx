import SVG from "../assets/task-animate.svg";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center md:flex-row flex-col bg-fit bg-pattern">
      <div className="flex-1 w-full flex items-center justify-center">
        <img src={SVG} alt="" className="size-[22rem] md:size-[32rem]" />
      </div>
      <div className="w-[45%] flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
