import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css"; // Import your CSS file

function NeeelitoPage() {
    return (
        <div className="neelitoPageBackground">
            <div className="contentNeeelito">
                <h1 className="pageTitleNeeelito">Choose the algorithm</h1>
                <div className="buttonContainer">
                    <Link to="/Neeelito-Page" className="algorithmButton">Dijkstra</Link>
                    <Link to="/Neeelito-Page" className="algorithmButton">BDS</Link>
                    <Link to="/Neeelito-Page" className="algorithmButton">DFS</Link>
                    <Link to="/Neeelito-Page" className="algorithmButton">A* Star</Link>
                    <Link to="/MazeMap-Page" className="algorithmButton">Maze Map</Link>
                </div>
            </div>
        </div>
    );
}

export default NeeelitoPage;
