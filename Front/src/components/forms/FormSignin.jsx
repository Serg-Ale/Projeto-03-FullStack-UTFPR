import { SigninSchema } from "@/schema/SigninSchema";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { signin } from "@/services/api";
import Cookies from "js-cookie";
import { useState } from "react";

const FormSignin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(SigninSchema) });

  const navigate = useNavigate();

  const handleSubmitForm = async (data) => {
    try {
      const token = await signin(data);
      Cookies.set("token", token.data, { expires: 1 });
      navigate("/character");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Unknown error");
      } else if (error.request) {
        setErrorMessage("No response received from server.");
      } else {
        setErrorMessage("An error occurred: " + error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex w-full flex-col items-center justify-center gap-4"
    >
      {/* Renderiza mensagem de erro, se houver */}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

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
  );
};

export default FormSignin;
