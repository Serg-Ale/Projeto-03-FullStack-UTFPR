import Header from "@/components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="m-auto mt-[15%] flex w-[40%] flex-col gap-8 rounded-xl bg-neutral-900 p-4 text-center text-neutral-200">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
