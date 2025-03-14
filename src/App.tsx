import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import Readme from "./pages/Readme";
import { FC } from "react";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:username" element={<Repos />} />
        <Route path="/repos/:username/:repo" element={<Readme />} />
      </Routes>
    </Router>
  );
};

export default App;
