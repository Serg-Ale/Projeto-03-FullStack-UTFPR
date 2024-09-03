import Header from "@/components/Header";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="m-auto mt-[15%] flex w-[40%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 pt-4 text-center text-2xl text-neutral-200">
        <div className="flex w-full items-center justify-between pb-4 text-neutral-200"></div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
