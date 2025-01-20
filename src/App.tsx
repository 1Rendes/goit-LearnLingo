import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Teachers from "./Pages/Teachers";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
