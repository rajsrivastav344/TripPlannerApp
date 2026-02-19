import React, { useState } from 'react';
import './details.css';

export default function Details() {
  const travelExperiences = {
    varanasi: [
      {
        id: 1,
        title: "Evening Ganga Aarti",
        price: 45,
        rating: 4.8,
        reviews: 124,
        image:
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/12/a3.jpg",
        isPopular: true,
        category: "Cultural",
        isFavorite: false,
      },
      {
        id: 2,
        title: "Morning Boat Tour",
        price: 35,
        rating: 4.7,
        reviews: 98,
        image:
          "https://banarastrip.com/wp-content/uploads/2022/01/Ghats-in-Varanasi-1.jpg",
        isPopular: false,
        category: "Sightseeing",
        isFavorite: true,
      },
      {
        id: 3,
        title: "Sarnath Buddhist Tour",
        price: 55,
        rating: 4.5,
        reviews: 64,
        image:
          "https://ucarecdn.com/2b7d0e96-9405-4b4d-9c8b-319d062aefe4/",
        isPopular: true,
        category: "History",
        isFavorite: false,
      },
       {
        id: 4,
        title: "Evening Ganga Aarti",
        price: 45,
        rating: 4.8,
        reviews: 124,
        image:
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/12/a3.jpg",
        isPopular: true,
        category: "Cultural",
        isFavorite: false,
      },
      {
        id: 5,
        title: "Morning Boat Tour",
        price: 35,
        rating: 4.7,
        reviews: 98,
        image:
          "https://banarastrip.com/wp-content/uploads/2022/01/Ghats-in-Varanasi-1.jpg",
        isPopular: false,
        category: "Sightseeing",
        isFavorite: true,
      },
      {
        id: 6,
        title: "Sarnath Buddhist Tour",
        price: 55,
        rating: 4.5,
        reviews: 64,
        image:
          "https://ucarecdn.com/2b7d0e96-9405-4b4d-9c8b-319d062aefe4/",
        isPopular: true,
        category: "History",
        isFavorite: false,
      },
    ],
    delhi: [
      {
        id: 11,
        title: "Taj Mahal and Agra Fort Day Trip",
        price: 89,
        rating: 4.9,
        reviews: 256,
        image:
          "https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/16:9/w_1920,c_limit/GettyImages-873536102.jpg",
        isPopular: true,
        category: "Sightseeing",
        isFavorite: false,
      },
      {
        id: 12,
        title: "Old Delhi Street Food Walk",
        price: 25,
        rating: 4.6,
        reviews: 187,
        image:
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/22/b4/a6.jpg",
        isPopular: false,
        category: "Food",
        isFavorite: false,
      },
      {
        id: 13,
        title: "Red Fort  Tour",
        price: 40,
        rating: 4.7,
        reviews: 143,
        image:
          "https://static.toiimg.com/photo/65666850.cms",
        isPopular: true,
        category: "History",
        isFavorite: false,
      },
      {
         id: 14,
        title: "Taj Mahal and Agra Fort Day Trip",
        price: 89,
        rating: 4.9,
        reviews: 256,
        image:
          "https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/16:9/w_1920,c_limit/GettyImages-873536102.jpg",
        isPopular: true,
        category: "Sightseeing",
        isFavorite: false,
      },
      {
        id: 15,
        title: "Old Delhi Street Food Walk",
        price: 25,
        rating: 4.6,
        reviews: 187,
        image:
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/22/b4/a6.jpg",
        isPopular: false,
        category: "Food",
        isFavorite: false,
      },
      {
        id: 16,
        title: "Red Fort  Tour",
        price: 40,
        rating: 4.7,
        reviews: 143,
        image:
          "https://static.toiimg.com/photo/65666850.cms",
        isPopular: true,
        category: "History",
        isFavorite: false,
      },
    ],
    western_ghats: [
 
       {
        id: 21,
        title: "Western Ghats Trekking Adventure",
        price: 65,
        rating: 4.9,
        reviews: 78,
        image:
          "https://live-liamtra-blog.s3.ap-south-1.amazonaws.com/2020/07/Dudhsagar-Trek.jpg",
        isPopular: true,
        category: "Adventure",
        isFavorite: false,
      },
      {
        id: 22,
        title: "Waterfall Exploration",
        price: 50,
        rating: 4.8,
        reviews: 102,
        image:
          "https://st3.depositphotos.com/2654993/36033/i/1600/depositphotos_360334178-stock-photo-tall-thin-double-waterfall-polikarya.jpg",
        isPopular: false,
        category: "Nature",
        isFavorite: false,
      },
       {
        id: 21,
        title: "Western Ghats Trekking Adventure",
        price: 65,
        rating: 4.9,
        reviews: 78,
        image:
          "https://live-liamtra-blog.s3.ap-south-1.amazonaws.com/2020/07/Dudhsagar-Trek.jpg",
        isPopular: true,
        category: "Adventure",
        isFavorite: false,
      },
      {
        id: 22,
        title: "Waterfall Exploration",
        price: 50,
        rating: 4.8,
        reviews: 102,
        image:
          "https://st3.depositphotos.com/2654993/36033/i/1600/depositphotos_360334178-stock-photo-tall-thin-double-waterfall-polikarya.jpg",
        isPopular: false,
        category: "Nature",
        isFavorite: false,
      },
       {
        id: 21,
        title: "Western Ghats Trekking Adventure",
        price: 65,
        rating: 4.9,
        reviews: 78,
        image:
          "https://live-liamtra-blog.s3.ap-south-1.amazonaws.com/2020/07/Dudhsagar-Trek.jpg",
        isPopular: true,
        category: "Adventure",
        isFavorite: false,
      },
      {
        id: 22,
        title: "Waterfall Exploration",
        price: 50,
        rating: 4.8,
        reviews: 102,
        image:
          "https://st3.depositphotos.com/2654993/36033/i/1600/depositphotos_360334178-stock-photo-tall-thin-double-waterfall-polikarya.jpg",
        isPopular: false,
        category: "Nature",
        isFavorite: false,
      },
       {
        id: 21,
        title: "Western Ghats Trekking Adventure",
        price: 65,
        rating: 4.9,
        reviews: 78,
        image:
          "https://live-liamtra-blog.s3.ap-south-1.amazonaws.com/2020/07/Dudhsagar-Trek.jpg",
        isPopular: true,
        category: "Adventure",
        isFavorite: false,
      },
      {
        id: 22,
        title: "Waterfall Exploration",
        price: 50,
        rating: 4.8,
        reviews: 102,
        image:
          "https://st3.depositphotos.com/2654993/36033/i/1600/depositphotos_360334178-stock-photo-tall-thin-double-waterfall-polikarya.jpg",
        isPopular: false,
        category: "Nature",
        isFavorite: false,
      },
    ],
  };

  const [searchLocation, setSearchLocation] = useState('');

  const toggleFavorite = (region, id) => {
    travelExperiences[region] = travelExperiences[region].map((exp) =>
      exp.id === id ? { ...exp, isFavorite: !exp.isFavorite } : exp
    );
  };

  const handleBook = (title) => {
    alert(`You have booked: ${title}`);
  };

  return (
    <div className="details-container">
      <div className="location-search">
        <input
          type="text"
          placeholder="Search location or experience..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
      </div>

      {Object.entries(travelExperiences).map(([region, experiences]) => {
        const filtered = experiences.filter(
          (exp) =>
            exp.title.toLowerCase().includes(searchLocation.toLowerCase()) ||
            exp.category.toLowerCase().includes(searchLocation.toLowerCase()) ||
            region.toLowerCase().includes(searchLocation.toLowerCase())
        );

        if (searchLocation.trim() !== '' && filtered.length === 0) {
          return null;
        }

        return (
          <div key={region} className="region-section">
            <h2 className="region-title">{region.replace('_', ' ').toUpperCase()}</h2>

            <div className="experiences-slider">
              {filtered.length > 0 ? (
                filtered.map((exp) => (
                  <div className="experience-card" key={exp.id}>
                    <div className="experience-image">
                      <img src={exp.image} alt={exp.title} />
                      {exp.isPopular && <span className="popular-tag">Popular</span>}
                      <button
                        className={`favorite-btn ${exp.isFavorite ? 'active' : ''}`}
                        onClick={() => toggleFavorite(region, exp.id)}
                      >
                        ♥
                      </button>
                    </div>
                    <div className="experience-info">
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-meta">
                        <span className="category-tag">{exp.category}</span>
                        <div className="rating">
                          <span className="stars">
                            {'★'.repeat(Math.floor(exp.rating)) +
                              '☆'.repeat(5 - Math.floor(exp.rating))}
                          </span>
                          <span className="rating-value">{exp.rating}</span>
                          <span className="reviews">({exp.reviews})</span>
                        </div>
                      </div>
                      <div className="experience-footer">
                        <div className="price">${exp.price}</div>
                        <button
                          className="book-btn"
                          onClick={() => handleBook(exp.title)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">No experiences found.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
