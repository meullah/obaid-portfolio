import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Work from "./components/Work";
import Process from "./components/Process";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Work />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/process" element={<Process />} />
      </Routes>
    </div>
  );
}

export default App;
