import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden',backgroundColor:"gray" }}>
      
 
     

      {/* Foreground content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row text-black mb-4">
          <div className="col-md-4 mb-3">
            <h5><i className="bi bi-geo-alt-fill me-2"></i>Find us:</h5>
            <p>Lucknow UP</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5><i className="bi bi-telephone-fill me-2"></i>Call us</h5>
            <p>+91 94150 25623<br />+91 94157 80361</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5><i className="bi bi-envelope-fill me-2"></i>Mail us</h5>
            <p>tripplanner.org<br />tripplanner@gmail.com</p>
          </div>
        </div>

        <hr />

        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <h5>Welcome To Trip Planner</h5>
            <p>
              Trip Planner is dedicated to the promotion of the profession of Materials
              Management and with its multifarious activities, including EDP, seminars,
              workshops, in-house training programs and consultancy assignment.
            </p>
            <div className="social-icons">
              <Link to="/"><i className="bi bi-facebook"></i></Link>
              <Link to="/"><i className="bi bi-twitter"></i></Link>
              <Link to="/"><i className="bi bi-google"></i></Link>
            </div>
          </div>

          <div className="col-md-4 mb-4 useful-links d-flex">
            <div className="me-4">
              <h5>Useful Links</h5>
              <ul style={{ marginTop: "32px" }}>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Expert Guide</Link></li>
                <li><Link to="/">Latest News</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Subscribe</h5>
            <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            <form className="subscribe-form d-flex">
              <input type="email" className="form-control" placeholder="Email Address" />
              <button type="submit">submit</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom mt-4">
          <p className="footer-note" style={{ backgroundColor: "yellow", color: "black", height: "40px" }}>
            © Copyright 2024 Designed & Developed By Raj Srivastav.
          </p>
          <div className="mt-2">
            <Link to="/" className="me-3">Home</Link>
            <Link to="/" className="me-3">Terms</Link>
            <Link to="/" className="me-3">Privacy</Link>
            <Link to="/" className="me-3">Policy</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
