import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Others from "./pages/Others";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/others" element={<Others />} />
  </Routes>
);
