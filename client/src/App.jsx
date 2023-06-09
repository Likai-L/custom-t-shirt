import { useState } from "react";
import "./index.css";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import CanvasModel from "./canvas/CanvasModel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app transition-all">
      <Home></Home>
      <CanvasModel></CanvasModel>
      <Customizer></Customizer>
    </main>
  );
}

export default App;
