import { CharacterSchema } from "@/schema/CharacterSchema";
import { joiResolver } from "@hookform/resolvers/joi";
import InputError from "@/components/InputError";
import { createCharacter } from "@/services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Header from "@/components/Header";

const CharacterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Hook para resetar o formulário
  } = useForm({ resolver: joiResolver(CharacterSchema) });

  const [message, setMessage] = useState("");

  const handleSubmitForm = async (data) => {
    try {
      const response = await createCharacter(data);
      setMessage("Character created successfully!");

      // Limpar os campos do formulário após o sucesso
      reset();

      // Limpar a mensagem após 3 segundos
      setTimeout(() => {
        setMessage("");
      }, 3000);

      return response;
    } catch (error) {
      console.error(error.message);
      setMessage("Character not created, please verify and try again");

      // Limpar a mensagem após 3 segundos
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <div className="m-auto my-8 mt-[20%] flex w-[90%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 text-center text-neutral-200 md:max-w-[60%]">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col items-center justify-center gap-4 pt-4 text-2xl"
        >
          <Input
            type="text"
            placeholder="Name"
            register={register}
            name="name"
          />
          {errors.name && <InputError text={errors.name?.message} />}

          <Input
            type="text"
            placeholder="Total Episodes"
            register={register}
            name="totalEpisodes"
          />
          {errors.totalEpisodes && (
            <InputError text={errors.totalEpisodes?.message} />
          )}

          <Input
            type="text"
            placeholder="Status"
            register={register}
            name="status"
          />
          {errors.status && <InputError text={errors.status?.message} />}

          <Input
            type="text"
            placeholder="Type"
            register={register}
            name="type"
          />
          {errors.type && <InputError text={errors.type?.message} />}

          <Button text="Submit" />
        </form>

        {message && (
          <span className="w-full rounded bg-neutral-200 p-2 text-xl font-bold text-neutral-950">
            {message}
          </span>
        )}
      </div>
    </>
  );
};

export default CharacterForm;
