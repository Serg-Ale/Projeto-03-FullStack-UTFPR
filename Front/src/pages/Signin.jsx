import { SigninSchema } from "@/schema/SigninSchema.jsx";
import { joiResolver } from "@hookform/resolvers/joi";
import Button from "@/components/Button.jsx";
import Input from "../components/Input.jsx";
import { useForm } from "react-hook-form";
import InputError from "@/components/InputError.jsx";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(SigninSchema) });

  const handleSubmitForm = (data) => {
    console.debug(data);
    // Todo: Call your API here to authenticate the user
  };

  return (
    <div className="m-auto my-8 flex w-[90%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 text-center text-neutral-200 md:max-w-[60%]">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex w-full flex-col items-center justify-center gap-4 pt-4 text-2xl"
      >
        <Input
          type={"email"}
          placeholder={"Email"}
          register={register}
          name="email"
        />
        {errors.email && <InputError text={errors.email?.message} />}

        <Input
          type={"password"}
          placeholder={"Password"}
          register={register}
          name="password"
        />
        {errors.password && <InputError text={errors.password?.message} />}
        <Button text={"Login"} />
      </form>
    </div>
  );
};

export default Signin;
