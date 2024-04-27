import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import MazeMap from "./pages/MazeMap";
import Neeelito from "./pages/Neeelito";

function App() {
  return (
    <Router>
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/Home-Page" replace />}
            />
            <Route path="/Home-Page" element={<Home />} />
            <Route path="/MazeMap-Page" element={<MazeMap />} />
            <Route path="/Neeelito-Page" element={<Neeelito />} />
        </Routes>
    </Router>
);
}

export default App;
