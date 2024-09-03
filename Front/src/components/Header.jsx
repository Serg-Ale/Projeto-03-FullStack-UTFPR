import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-neutral-900 p-6 font-bold">
      <h1 className="m-auto text-4xl font-bold text-neutral-200">
        Rick and Morty API Search
      </h1>
      <div className="flex flex-row gap-8 text-2xl">
        <Link to={"/signin"} className="hover:text-primary">
          Signin
        </Link>
        <Link to={"/list"} className="hover:text-primary">
          List
        </Link>
        <Link to={"/character"} className="hover:text-primary">
          Create
        </Link>
      </div>
    </header>
  );
};

export default Header;
