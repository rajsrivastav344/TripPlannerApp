import React, { useState } from "react";
import "./Service.css";

export default function Services() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const services = {
    air: [
      {
        name: "Paragliding",
        img: "https://media.istockphoto.com/id/522078473/photo/paraglider-flying-over-mountains.jpg?s=612x612&w=0&k=20&c=fsoxFDnN_rfISUIBb65xLprBiqv60rdYRa3q_4DQAsI=",
        price: "₹2000",
        details: "Fly high with professional paragliders for 20-30 mins.",
      },
      {
        name: "Hang Gliding",
        img: "/images/hanggliding.jpg",
        price: "₹2500",
        details: "Experience the thrill of free flight with hang gliding.",
      },
      {
        name: "Skydiving",
        img: "/images/skydiving.jpg",
        price: "₹15000",
        details: "Jump from 10,000 feet with trained instructors.",
      },
      {
        name: "Hot Air Ballooning",
        img: "/images/hotairballoon.jpg",
        price: "₹8000",
        details: "Enjoy a calm and scenic ride above landscapes.",
      },
      {
        name: "Zip Lining",
        img: "/images/ziplining.jpg",
        price: "₹1200",
        details: "Slide across valleys or rivers on a high zip line.",
      },
      {
        name: "Bungee Jumping",
        img: "/images/bungee.jpg",
        price: "₹3000",
        details: "Leap off from a height with full safety gear.",
      },
      {
        name: "Parasailing",
        img: "/images/parasailing.jpg",
        price: "₹2500",
        details: "Get towed behind a boat while attached to a parachute.",
      },
      {
        name: "Wingsuit Flying",
        img: "/images/wingsuit.jpg",
        price: "₹20000",
        details: "Extreme sport where you glide through the air in a wingsuit.",
      },
    ],
    water: [
      {
        name: "White Water Rafting",
        img: "/images/rafting.jpg",
        price: "₹1800",
        details: "Conquer the rapids with expert guides.",
      },
      {
        name: "Kayaking",
        img: "/images/kayaking.jpg",
        price: "₹1500",
        details: "Paddle through rivers or seas in a kayak.",
      },
      {
        name: "Scuba Diving",
        img: "/images/scuba.jpg",
        price: "₹5000",
        details: "Explore the underwater world with certified instructors.",
      },
      {
        name: "Surfing",
        img: "/images/surfing.jpg",
        price: "₹2000",
        details: "Ride ocean waves with a surfboard.",
      },
      {
        name: "Boat Ride",
        img: "/images/boatride.jpg",
        price: "₹1000",
        details: "Relax with a scenic boat tour.",
      },
      {
        name: "Jet Skiing",
        img: "/images/jetski.jpg",
        price: "₹2500",
        details: "Race through water on a powerful jet ski.",
      },
      {
        name: "Wakeboarding",
        img: "/images/wakeboarding.jpg",
        price: "₹3000",
        details: "Ride on a board while being towed by a boat.",
      },
      {
        name: "Snorkelling",
        img: "/images/snorkelling.jpg",
        price: "₹1800",
        details: "Swim near the surface with a snorkel to view marine life.",
      },
    ],
    land: [
      {
        name: "Safari",
        img: "/images/safari.jpg",
        price: "₹3000",
        details: "Enjoy wildlife and nature with an open jeep safari.",
      },
      {
        name: "Trekking",
        img: "/images/trekking.jpg",
        price: "₹1200",
        details: "Trek through mountains and scenic trails.",
      },
      {
        name: "Camping",
        img: "/images/camping.jpg",
        price: "₹2000",
        details: "Stay overnight in nature with tents and campfires.",
      },
      {
        name: "Rock Climbing",
        img: "/images/rockclimbing.jpg",
        price: "₹2500",
        details: "Challenge yourself by climbing natural or artificial rocks.",
      },
      {
        name: "Cycling Tours",
        img: "/images/cycling.jpg",
        price: "₹1500",
        details: "Cycle through scenic routes with guided tours.",
      },
      {
        name: "Horse Riding",
        img: "/images/horse.jpg",
        price: "₹2200",
        details: "Ride trained horses through beautiful landscapes.",
      },
      {
        name: "Sandboarding",
        img: "/images/sandboarding.jpg",
        price: "₹1800",
        details: "Slide down sand dunes on a board.",
      },
      {
        name: "Caving/Spelunking",
        img: "/images/caving.jpg",
        price: "₹2800",
        details: "Explore underground caves with safety gear.",
      },
    ],
  };

  return (
    <div className="admin-container">
      
      <div className="sidebar">
        <select
          value={selectedService}
          onChange={(e) => {
            setSelectedService(e.target.value);
            setSelectedActivity(null);
          }}
          style={{
            padding: "6px",
            borderRadius: "4px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          <option value="">-- Choose --</option>
          <option value="air">Air Services</option>
          <option value="water">Water Services</option>
          <option value="land">Land Services</option>
        </select>

        {selectedService && (
          <>
            <h2 style={{ textTransform: "capitalize" }}>
              {selectedService} Services
            </h2>
            <ul>
              {services[selectedService].map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedActivity(item)}
                  style={{ cursor: "pointer", marginBottom: "8px" }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

     
      <div className="main-content">
        <div className="header">
          <button className="collapse-btn">Collapse</button>
          <h1>Services Dashboard</h1>
        </div>

        {selectedActivity && (
          <div className="activity-details" style={{ marginTop: "20px" }}>
            <h2>{selectedActivity.name}</h2>
            <img
              src={selectedActivity.img}
              alt={selectedActivity.name}
              style={{ width: "100%",height:"500px", borderRadius: "8px", margin: "10px 0" }}
            />
            <p>{selectedActivity.details}</p>
            <p>
              <strong className="" style={{textAlign:"center"}}>Price: {selectedActivity.price}</strong>
            </p>
            <button
              style={{
                padding: "10px 16px",
                border: "none",
                background: "blue",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
