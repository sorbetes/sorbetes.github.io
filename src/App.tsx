import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Others from "./pages/Others";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/others" element={<Others />} />
    </Routes>
  );
}

export default App;
