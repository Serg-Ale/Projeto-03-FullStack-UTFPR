import FormCharacter from "@/components/forms/FormCharacter";
import Header from "@/components/Header";
import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const CharacterForm = () => {
  return (
    <MainLayout>
      <FormCharacter />
    </MainLayout>
  );
};

export default CharacterForm;
