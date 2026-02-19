import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CardCarousel({ id, images, title }) {
  const slides = [];
  for (let i = 0; i < images.length; i += 5) {
    slides.push(images.slice(i, i + 5));
  }

  return (
    <div className="mb-5">
      <h2 style={{ marginLeft: "30px" }}>{title}</h2>
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slideImages, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row align-items-center">
                {/* Prev Button */}
                <div className="col-sm-1 text-center">
                  <button
                    className="btn btn-light"
                    data-bs-target={`#${id}`}
                    data-bs-slide="prev"
                  >
                    ❮
                  </button>
                </div>

                {/* Cards */}
                {slideImages.map((img, i) => (
                  <div className="col-sm-2" key={i}>
                    <div className="card">
                      <img src={img} className="card-img-top" alt={`Card ${i}`} />
                      <div className="card-body">
                        <h6 className="card-title">Hotel {i + 1}</h6>
                        <p className="card-text">Custom text here</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Next Button */}
                <div className="col-sm-1 text-center">
                  <button
                    className="btn btn-light"
                    data-bs-target={`#${id}`}
                    data-bs-slide="next"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HotelCarousels() {
  const [search, setSearch] = useState("");

  const carousels = [
    {
      id: "carouselOne",
      title: "Lucknow",
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/square600/583591528.webp?k=9a7562b59b6ce48d601ab8cd24f9e8bc535259111500548a58a4528d2ac3ade3&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/335005056.webp?k=a966e6eb679abf72a5225c2cd021dc7a335df4c689cf0837191929b9a3cbff7a&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/643408015.webp?k=ca4e886ce1fbd680b8554626ef85d2d0f07d273f93d86e1eba9cf867d35b92f4&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/517915045.webp?k=7fd147b0bf86e0970a1d06d3f48c18c77457b2d250c2e672a0046d4c52b3ee34&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/452256182.webp?k=1295eaacd3521f0d66aff50cf2ecc1b62a1af4e5c3937471325f106da93be528&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/691569105.webp?k=327bbcffb8406f32590521fa55c4c0da201697fe857a91064b11ac83202bcd42&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/80052958.webp?k=fd32f91eabe747ad8f9f954b3542bd10378a4b4ede62c5102d1b708f7a5531c4&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/703575544.webp?k=d4611e583fd0492981eb23c851fd0db0cb514ab63cb2ce61bcf3c64d735bfdd8&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/675932726.webp?k=fed7088baf97793099e0f96cd155951762cec716ff5352a5a17e25b7a5a1d6c0&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/531611005.webp?k=d45740da6600a4797a15e64fa0e35ea5546f9ffa759761e8ede83e31d676eb09&o=",
      
      ],
    },
    {
      id: "carouselTwo",
      title: "Delhi",
      images: [
         "https://cf.bstatic.com/xdata/images/hotel/square240/234890162.webp?k=cb59173225191e9c9e1e45470d422f4272a58f33e5114a70f0e8ca8746f63472&o=",
          "https://q-xx.bstatic.com/xdata/images/hotel/square600/30785708.webp?k=95ef9cd617234ef606538bd14abeb07c6342c111d4121a9b65f5afb239d8ace6&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square240/723776525.webp?k=e51e6e5c8d5b1af292459f5e17863ebbb60f744495b165f30916749f916050ad&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square240/154232887.webp?k=3b2082442297d391915c5d9008adc0a0154d181977d3566302ab89abbce2f058&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square240/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square240/30393271.webp?k=6647e22640d4c9e73730c30eb2bc6a4fa94a2ad88590c8ba55de2dbbdec765b1&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/30393271.webp?k=6647e22640d4c9e73730c30eb2bc6a4fa94a2ad88590c8ba55de2dbbdec765b1&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/464303942.webp?k=92a8b28475c05278a8e28db32dbf2134b2c3828768a7461b3ca21b9194b722d3&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/751145485.webp?k=9ac9112def6871306de61459048c91ba2db26541c2e587da762fa70d4cefef88&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/724390688.webp?k=ac8581f81a4b5d5d9f2ab7d8a4cbfc2dd4cad4a5c73de95e0feed6aadc3a1fc3&o=",
        
      ],
    },
    {
      id: "carouselThree",
      title: "Haridwar",
      images: [
         "https://cf.bstatic.com/xdata/images/hotel/square600/594000832.webp?k=5d86f0806895af6918514d8eaa6c979ca72abecf021aedf7cb4cdc26bf2ac8fb&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/713042467.webp?k=a8372be5b2babb2b6e25024660825ec23194d167ba665a8c03e0ea509ddde95d&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/729309850.webp?k=aaf2b0707c0ef878f86d111045385917c6c26617ea78b4c6e4f3f03e66b7d6a7&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square240/701037427.webp?k=548a97c388be6ceb66e0176c0516313a7e2747a1e8c60bb946490877d00375cf&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/147757199.webp?k=a09d2baf41a37ef5d74c7619f14fd5ba99343258ceec8eccc011841207354a45&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/594716885.webp?k=b7d77742dfb1b8fffb9e0608b64956942c7abf4610443a2ca6a2677dd469d6d8&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/726835136.webp?k=624787fe49d9c4536ac98512b06d312729f37050eae75a55b96587b1728a5c42&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/407638014.webp?k=66436a59d7348e22433aba0d923cb8b44897b0a4f51deeb96e7fae3ffec36ca2&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/502052459.webp?k=7da4424e238f22e1bc5976f7772f0737c245f4cc755fc54d643dd8a979840ba5&o=",
          "https://cf.bstatic.com/xdata/images/hotel/square600/547194672.webp?k=5c0c21d1733cfe07013998da5187d7237c700f63f1944b050be7755c0adce512&o=",
        
      ],
    },
  ];

  // Filter hotels by location name
  const filteredCarousels = carousels.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Show all hotels (filtered if user searches) */}
      {filteredCarousels.map((carousel) => (
        <CardCarousel
          key={carousel.id}
          id={carousel.id}
          title={carousel.title}
          images={carousel.images}
        />
      ))}
    </div>
  );
}

















