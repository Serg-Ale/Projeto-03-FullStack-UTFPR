import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-neutral-900 p-6">
      <h1 className="m-auto text-4xl font-bold text-neutral-200">
        Rick and Morty API Search
      </h1>
      <Link to={"/signin"}>Login</Link>
    </header>
  );
};

export default Header;
