import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import Payments from "./pages/Payments"
import { useSnapshot } from "valtio";
import state from "./store";


function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      {snap.current === "home" && <Home />}
      {snap.current === "customizer" && <Customizer />}
      {snap.current === "payment" && <Payments />}
      <Canvas></Canvas>
    </main>
  )
}

export default App
