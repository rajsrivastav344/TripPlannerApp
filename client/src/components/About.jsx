import React from 'react'
import '../App.css';
import dimg from '../dimg.png'
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className='container-fluid'>
            <section className="hero-section py-5">
                <div className="container d-flex flex-column flex-lg-row align-items-center">
                    {/* Text Content */}
                    <div className="hero-text mb-4 mb-lg-0">
                        <h1 className="display-5 fw-bold">Travel around the world</h1>
                        <p className="lead">
                            Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
                        </p>
                       <Link to='/signup'> <button className="btn btn-primary btn-lg">Sign Up Now</button></Link>
                    </div>

                    {/* Illustrative Graphic */}
                    <div className="hero-image ms-lg-5">
                        <img
                            src={dimg}
                            alt="Travel illustration"
                            className="img-fluid"
                        style={{height:"700px", width:"700px"}}
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}
