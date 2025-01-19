import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Teachers from "./Pages/Teachers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
