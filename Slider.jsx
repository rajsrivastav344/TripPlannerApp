import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CardCarousel({ id, images }) {
  const slides = [];
  for (let i = 0; i < images.length; i += 5) {
    slides.push(images.slice(i, i + 5));
  }

  return (
    <div id={id} className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-inner">

        {slides.map((slideImages, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
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
                      <h6 className="card-title">Card {i + 1}</h6>
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
  );
}

export default function ThreeCarousels() {
  return (
    <div className="container mt-5">
      <h2 style={{marginLeft:"30px"}}>Lucknow</h2>
      <CardCarousel
        id="carouselOne"
        images={[
          "https://picsum.photos/id/1011/200/150",
          "https://picsum.photos/id/1012/200/150",
          "https://picsum.photos/id/1053/200/150",
          "https://picsum.photos/id/1014/200/150",
          "https://picsum.photos/id/1015/200/150",
          "https://picsum.photos/id/1016/200/150",
          "https://picsum.photos/id/1018/200/150",
          "https://picsum.photos/id/1019/200/150",
          "https://picsum.photos/id/1020/200/150",
          "https://picsum.photos/id/1021/200/150"
        ]}
      />
<h2 style={{marginLeft:"30px"}}>Delhi</h2>
      <CardCarousel
        id="carouselTwo"
        images={[
          "https://picsum.photos/id/1022/200/150",
          "https://picsum.photos/id/1023/200/150",
          "https://picsum.photos/id/1024/200/150",
          "https://picsum.photos/id/1025/200/150",
          "https://picsum.photos/id/1026/200/150",
          "https://picsum.photos/id/1027/200/150",
          "https://picsum.photos/id/1028/200/150",
          "https://picsum.photos/id/1029/200/150",
          "https://picsum.photos/id/1050/200/150",
          "https://picsum.photos/id/1051/200/150"
        ]}
      />
      <h2 style={{marginLeft:"30px"}}>Haridwar</h2>
      <CardCarousel
        id="carouselThree"
        images={[
          "https://picsum.photos/id/1032/200/150",
          "https://picsum.photos/id/1033/200/150",
          "https://picsum.photos/id/1034/200/150",
          "https://picsum.photos/id/1035/200/150",
          "https://picsum.photos/id/1036/200/150",
          "https://picsum.photos/id/1037/200/150",
          "https://picsum.photos/id/1038/200/150",
          "https://picsum.photos/id/1039/200/150",
          "https://picsum.photos/id/1040/200/150",
          "https://picsum.photos/id/1041/200/150"
        ]}
      />
    </div>
  );
}
