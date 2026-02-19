import React, { useState } from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const services = {
    air: [
      {
        name: "Paragliding",
        img: "https://media.istockphoto.com/id/522078473/photo/paraglider-flying-over-mountains.jpg?s=612x612&w=0&k=20&c=fsoxFDnN_rfISUIBb65xLprBiqv60rdYRa3q_4DQAsI=",
        price: 2000,
        details: "Fly high with professional paragliders for 20-30 mins.",
      },
      {
        name: "Hang Gliding",
        img: "https://images.unsplash.com/photo-1673296120926-87eed722a216?w=600&auto=format&fit=crop&q=60",
        price: 2500,
        details: "Experience the thrill of free flight with hang gliding.",
      },
      {
        name: "Skydiving",
        img: "https://www.netheravon.com/wp-content/uploads/2024/02/apa-skydive-18.jpg",
        price: 15000,
        details: "Jump from 10,000 feet with trained instructors.",
      },
      {
        name: "Hot Air Ballooning",
        img: "https://www.daysoftheyear.com/wp-content/uploads/hot-air-balloon-day2.jpg",
        price: 8000,
        details: "Enjoy a calm and scenic ride above landscapes.",
      },
      {
        name: "Zip Lining",
        img: "https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Ziplining-in-goa_result.webp",
        price: 1200,
        details: "Slide across valleys or rivers on a high zip line.",
      },
      {
        name: "Bungee Jumping",
        img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/22/b3/f1.jpg",
        price: 3000,
        details: "Leap off from a height with full safety gear.",
      },
      {
        name: "Parasailing",
        img: "https://inclusivebalitour.com/wp-content/uploads/2022/12/Parasailing-Adventure-2-1.jpg",
        price: 2500,
        details: "Get towed behind a boat while attached to a parachute.",
      },
      {
        name: "Wingsuit Flying",
        img: "https://i.pinimg.com/736x/40/35/e7/4035e7ee8ffb795b8cedb207a3f11317.jpg",
        price: 20000,
        details: "Extreme sport where you glide through the air in a wingsuit.",
      },
    ],
    water: [
      {
        name: "White Water Rafting",
        img: "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92",
        price: 1800,
        details: "Conquer the rapids with expert guides.",
      },
      {
        name: "Kayaking",
        img: "https://img.freepik.com/free-photo/couple-together-kayaking-river_1303-16023.jpg",
        price: 1500,
        details: "Paddle through rivers or seas in a kayak.",
      },
      {
        name: "Scuba Diving",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/9c/05/77.jpg",
        price: 5000,
        details: "Explore the underwater world with certified instructors.",
      },
      {
        name: "Surfing",
        img: "https://media.cnn.com/api/v1/images/stellar/prod/130624174959-50-surf-spots-the-box.jpg",
        price: 2000,
        details: "Ride ocean waves with a surfboard.",
      },
      {
        name: "Boat Ride",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/68/de.jpg",
        price: 1000,
        details: "Relax with a scenic boat tour.",
      },
      {
        name: "Jet Skiing",
        img: "https://jetskihireibiza.com/wp-content/uploads/2019/04/2024-Yamaha-FXSVHOCR-EU-Dusty_Navy-Action-003-03.jpg",
        price: 2500,
        details: "Race through water on a powerful jet ski.",
      },
      {
        name: "Wakeboarding",
        img: "https://www.active-traveller.com/images/advice/wake.jpg",
        price: 3000,
        details: "Ride on a board while being towed by a boat.",
      },
      {
        name: "Snorkelling",
        img: "https://goggleman.com.au/cdn/shop/collections/Snorkeling.jpg",
        price: 1800,
        details: "Swim near the surface with a snorkel to view marine life.",
      },
    ],
    land: [
      {
        name: "Safari",
        img: "https://visitcentralflorida.org/wp-content/uploads/2022/03/Safari-Wilderness.jpg",
        price: 3000,
        details: "Enjoy wildlife and nature with an open jeep safari.",
      },
      {
        name: "Trekking",
        img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2015/02/Intrepid-Travel-Chile-Patagonia-trekking-002.jpg",
        price: 1200,
        details: "Trek through mountains and scenic trails.",
      },
      {
        name: "Camping",
        img: "https://www.novaparks.com/sites/default/files/styles/scale_1440/public/2025-03/PohickBayPark20240831-NP-03%20-%20web.jpg",
        price: 2000,
        details: "Stay overnight in nature with tents and campfires.",
      },
      {
        name: "Rock Climbing",
        img: "https://climbinghouse.com/wp-content/uploads/2023/06/woman_climbing_up_mountain-1.jpg",
        price: 2500,
        details: "Challenge yourself by climbing natural or artificial rocks.",
      },
      {
        name: "Cycling Tours",
        img: "https://www.shutterstock.com/image-photo/active-senior-couple-on-mountain-600nw-2319635783.jpg",
        price: 1500,
        details: "Cycle through scenic routes with guided tours.",
      },
      {
        name: "Horse Riding",
        img: "https://www.penguintravel.com/uploads/products/thumb/Th10_prbig_1209.jpg",
        price: 2200,
        details: "Ride trained horses through beautiful landscapes.",
      },
      {
        name: "Sandboarding",
        img: "https://wowiwalkers.com/wp-content/uploads/2021/05/sandboardingsanpedrodeatacamachile-2.jpg",
        price: 1800,
        details: "Slide down sand dunes on a board.",
      },
      {
        name: "Caving/Spelunking",
        img: "https://www.active-traveller.com/images/advice/caving-potholing-spelunking.jpg",
        price: 2800,
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
              style={{
                width: "100%",
                height: "500px",
                borderRadius: "8px",
                margin: "10px 0",
              }}
            />
            <p>{selectedActivity.details}</p>
            <p>
              <strong>Price: ₹{selectedActivity.price}</strong>
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
              className="book-btn"
              onClick={() => navigate("/book-now", { state: selectedActivity })}
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
