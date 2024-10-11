import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartGame />} />
      <Route path="/playgame" element={<PlayGame />} />
    </Routes>
  );
}

export default App;
