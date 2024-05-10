import { Route, Routes } from "react-router";
import "./App.css";
import Intro from "./pages/intro/Intro";
import StateHook from "./pages/useState/StateHook";
import EffectHook from "./pages/useEffect/EffectHook";
import RefHook from "./pages/useRef/RefHook";

function App() {
  document.title = "React Hooks 🌟🌟";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/useState" element={<StateHook />} />
        <Route path="/useEffect" element={<EffectHook />} />
        <Route path="/useRef" element={<RefHook />} />

        <Route path="/*" element={<h1>Error 404: Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
