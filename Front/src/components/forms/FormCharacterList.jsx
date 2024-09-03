import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import { getCharacter } from "@/services/api";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const FormCharacterList = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSearch = async (data) => {
    const { search } = data;
    console.debug(search);

    if (search.trim() === "") {
      console.debug("Search term is empty, not calling getCharacter");
      return;
    }

    try {
      const user = await getCharacter(search);
      console.debug(user.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const validateToken = (data) => {
    const token = Cookies.get("token");
    if (!token) navigate("/signin");
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="text-xl">
      <Input
        type={"text"}
        placeholder={"Search by name"}
        register={register}
        name="search"
      />
      <Button text={"search"} />
    </form>
  );
};

export default FormCharacterList;
