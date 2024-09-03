import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import { getCharacter } from "@/services/api";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../CharacterCard";

const FormCharacterList = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]); // Estado para armazenar os personagens
  const [hasSearched, setHasSearched] = useState(false); // Estado para verificar se a busca foi realizada

  const handleSearch = async (data) => {
    const { search } = data;
    console.debug(search);

    if (search.trim() === "") {
      console.debug("Search term is empty, not calling getCharacter");
      return;
    }

    try {
      const response = await getCharacter(search);
      console.debug(response.data);
      setCharacters(response.data); // Atualiza o estado com os personagens retornados
      setHasSearched(true); // Define que a busca foi realizada
    } catch (error) {
      console.error(error.message);
      setHasSearched(true); // Mesmo se ocorrer um erro, define que a busca foi realizada
    }
  };

  const validateToken = () => {
    const token = Cookies.get("token");
    if (!token) navigate("/signin");
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(handleSearch)} className="text-xl">
        <Input
          type="text"
          placeholder="Search by name"
          register={register}
          name="search"
        />
        <Button text="Search" />
      </form>

      <div className="mt-4">
        {hasSearched && characters.length === 0 ? (
          <p className="text-xl">No characters found.</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character._id} character={character} />
          ))
        )}
      </div>
    </>
  );
};

export default FormCharacterList;
