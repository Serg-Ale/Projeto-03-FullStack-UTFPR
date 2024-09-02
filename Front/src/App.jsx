import { Outlet } from "react-router-dom";
import Header from "./components/Headere";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
