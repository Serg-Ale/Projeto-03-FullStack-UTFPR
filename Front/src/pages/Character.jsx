import Button from "@/components/Button";
import Input from "@/components/Input";
import { CharacterSchema } from "@/schema/CharacterSchema";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

const Character = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(CharacterSchema) });

  const handleSubmitForm = (data) => {
    console.debug(data);
  };

  return (
    <div className="m-auto my-8 flex w-[90%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 text-center text-neutral-200 md:max-w-[60%]">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex w-full flex-col items-center justify-center gap-4 pt-4 text-2xl"
      >
        <Input
          type={"text"}
          placeholder="Name"
          register={register}
          name="name"
        />
        {errors.name && <span>{errors.name.message}</span>}

        <Input
          type={"text"}
          placeholder="Total Episodes"
          register={register}
          name="totalEpisodes"
        />
        {errors.totalEpisodes && <span>{errors.totalEpisodes.message}</span>}

        <Input
          type={"text"}
          placeholder="Status"
          register={register}
          name="status"
        />

        {errors.status && <span>{errors.status.message}</span>}

        <Input
          type={"text"}
          placeholder="Type"
          register={register}
          name="type"
        />
        {errors.type && <span>{errors.type.message}</span>}

        <Button text="Submit" />
      </form>
    </div>
  );
};

export default Character;
