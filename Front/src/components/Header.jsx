import { Link } from "react-router-dom";
import { signout, userLogged } from "@/services/api";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState({});

  const getUserLogged = async () => {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserLogged();
  }, []);

  return (
    <header className="flex items-center justify-between bg-neutral-900 p-6 font-bold">
      <div className="flex flex-row gap-8 text-2xl">
        {user ? (
          <span>{user.email} - logged</span>
        ) : (
          <Link to={"/signin"} className="hover:text-primary">
            Signin
          </Link>
        )}
      </div>
      <h1 className="m-auto text-4xl font-bold text-neutral-200">
        Projeto 3 FullStack
      </h1>
      <div className="flex flex-row gap-8 text-2xl">
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
