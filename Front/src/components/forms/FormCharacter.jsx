import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import { CharacterSchema } from "@/schema/CharacterSchema";
import { createCharacter } from "@/services/api";
import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormCharacter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(CharacterSchema) });

  // Estado para armazenar a mensagem de sucesso ou erro
  const [message, setMessage] = useState("");

  const handleSubmitForm = async (data) => {
    try {
      const response = await createCharacter(data);
      setMessage("Character created successfully!");
      return response;
    } catch (error) {
      console.error(error.message);
      setMessage("Character not created, please verify and try again");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex w-full flex-col items-center justify-center gap-4 pt-4 text-2xl"
    >
      <Input type={"text"} placeholder="Name" register={register} name="name" />
      {errors.name && <InputError text={errors.name?.message} />}

      <Input
        type={"text"}
        placeholder="Total Episodes"
        register={register}
        name="totalEpisodes"
      />
      {errors.totalEpisodes && (
        <InputError text={errors.totalEpisodes?.message} />
      )}

      <Input
        type={"text"}
        placeholder="Status"
        register={register}
        name="status"
      />
      {errors.status && <InputError text={errors.status?.message} />}

      <Input type={"text"} placeholder="Type" register={register} name="type" />
      {errors.type && <InputError text={errors.type?.message} />}

      <Button text="Submit" />

      {message && (
        <span className="w-full rounded bg-neutral-200 p-2 text-xl font-bold text-neutral-950">
          {message}
        </span>
      )}
    </form>
  );
};

export default FormCharacter;
