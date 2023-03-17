import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className="gallery section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>gallery</h2>
          <p>
            Check <span>Our Gallery</span>
          </p>
        </div>
        <div className="gallery-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-5.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-6.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-7.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                to={"#"}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <img
                  src="assets/img/gallery/gallery-8.jpg"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Index;
