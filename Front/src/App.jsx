import Header from "./components/Headere";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Header />
      <main className="flex h-screen w-full items-center justify-center border-2 border-red-700 bg-background">
        <Signin />
      </main>
    </>
  );
}

export default App;
