import { Route, Routes } from "react-router";
import "./App.css";
import Intro from "./pages/intro/Intro";
import StateHook from "./pages/useState/StateHook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/useState" element={<StateHook />} />

        <Route path="/*" element={<h1>Error 404: Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
