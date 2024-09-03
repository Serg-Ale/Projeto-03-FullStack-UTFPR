import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-neutral-900 p-6">
      <h1 className="m-auto text-4xl font-bold text-neutral-200">
        Rick and Morty API Search
      </h1>
      <div className="flex flex-row gap-4">
        <Link to={"/signin"}>Signin</Link>
        <Link to={"/list"}>List</Link>
        <Link to={"/character"}>Create a Character</Link>
      </div>
    </header>
  );
};

export default Header;
