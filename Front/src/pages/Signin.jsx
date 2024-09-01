import Button from "@/components/Button.jsx";
import Input from "../components/Input.jsx";

const Signin = () => {
  return (
    <div className="m-auto my-8 flex w-[90%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 text-center text-neutral-200 md:max-w-[40%]">
      <form className="flex w-full flex-col items-center justify-center gap-4 pt-4 text-2xl">
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Button text={"Login"} />
      </form>
    </div>
  );
};

export default Signin;
