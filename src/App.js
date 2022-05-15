import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Work from "./components/Work";
import Process from "./components/Process";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Details from "./components/workDetails";
import itemDetails from "./itemData";
import LandingPage from "./components/about-componenents/LandingPage";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let myTheme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
myTheme = responsiveFontSizes(myTheme);

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Work />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/process" element={<Process />} />
          <Route
            exact
            path="/Breakfast"
            element={<Details data={itemDetails[0]} />}
          />

          <Route
            exact
            path="/Burger"
            element={<Details data={itemDetails[1]} />}
          />

          <Route
            exact
            path="/Camera"
            element={<Details data={itemDetails[2]} />}
          />

          <Route
            exact
            path="/Coffee"
            element={<Details data={itemDetails[3]} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
