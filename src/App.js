import { Home, Destination, Crew, Technology } from "./pages";
import NavBar from "./components/Desktop/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Space-Tourism-Website/" element={<Home />} />
        <Route
          path="/Space-Tourism-Website/destination"
          element={<Destination />}
        />
        <Route path="/Space-Tourism-Website/crew" element={<Crew />} />
        <Route
          path="/Space-Tourism-Website/technology"
          element={<Technology />}
        />
      </Routes>
    </Router>
  );
}

export default App;
