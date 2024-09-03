import FormCharacter from "@/components/forms/FormCharacter";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const CharacterForm = () => {
  return (
    <>
      <Header />

      <div className="m-auto my-8 mt-[20%] flex w-[40%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 text-center text-neutral-200">
        <div className="flex w-full items-center justify-between pb-4 text-neutral-200">
          <h2 className="text-xl font-bold">Hello. Guest</h2>
          <Link to={"/signin"} className="text-xl font-bold">
            SignOut
          </Link>
        </div>
        <FormCharacter />
      </div>
    </>
  );
};

export default CharacterForm;
