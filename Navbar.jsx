import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import a from '../a.png';
import b from '../b.png';
import c from '../c.png';
import logo from '../logo.png';


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ width: "100%",backgroundColor:"white" }}>
            <div className="container-fluid">

                {/* LOGO */}
                <a className="navbar-brand ms-4" href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "90px", width: "90px" }}
                    />
                </a>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* COLLAPSE AREA */}
                <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                    {/* LINKS + RIGHT ACTIONS (row) */}
                    <div className="w-100 d-flex justify-content-between align-items-center flex-wrap">
                        <ul className="navbar-nav mb-2  ms-auto mb-lg-0 d-flex flex-row">
                            <li className="nav-item">
                                <Link className="nav-link me-3" to="/">
                                    <img src={a} alt="home" style={{ height: "25px", width: "25px" }} /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" to="/services">
                                    <img src={c} alt="services" style={{ height: "25px", width: "25px" }} /> Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/experiences">
                                    <img src={b} alt="experiences" style={{ height: "25px", width: "25px" }} /> Experiences
                                </Link>
                            </li>
                        </ul>

                    
                    </div>
                </div>
            </div>
        </nav>
    );
}
