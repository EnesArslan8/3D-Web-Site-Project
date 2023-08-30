import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Canvas from "./canvas";
function App() {

  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in-out ">
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  );
}

export default App;
