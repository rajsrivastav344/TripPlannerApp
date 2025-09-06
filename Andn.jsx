// Intro.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import '../App.css';


export default function Andn() {
    const navigate = useNavigate();

    useEffect(() => {
        // Wait for animation to finish, then go to Home
        const timer = setTimeout(() => {
            navigate("/Home");
        }, 3700); // 3.5 seconds

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="intro-screen">
            <span className="letter">T</span>
            <span className="letter">r</span>
            <span className="letter">i</span>
            <span className="letter">p</span>
            <br />
            <span className="letter">.</span>
            <span className="letter">P</span>
            <span className="letter">l</span>
            <span className="letter">a</span>
            <span className="letter">n</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
        </div>
    );
}
