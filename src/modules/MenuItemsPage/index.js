import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItemDesc, menuOptions } from "../../constants/DummyData";

const Index = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <section className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>
            Check Our <span>Yummy Menu</span>
          </p>
        </div>
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {menuOptions?.map((option, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link
                  to={"#"}
                  className={`nav-link show ${
                    isActive === option?.id ? "active" : ""
                  }`}
                  data-bs-toggle="tab"
                  data-bs-target={option?.dataTarget}
                  onClick={() => setIsActive(option?.id)}
                >
                  <h4>{option?.name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          {menuItemDesc?.map((item, index) => {
            return (
              <div
                className={`tab-pane fade ${
                  isActive === item?.id ? "active show" : ""
                }`}
                id={item?.id}
                key={index}
              >
                <div className="tab-header text-center">
                  <p>{item?.title}</p>
                  <h3>{item?.subTitle}</h3>
                </div>
                <div className="row gy-5">
                  {item?.description?.map((element, index) => {
                    return (
                      <div className="col-lg-4 menu-item" key={index}>
                        <Link to={"#"} className="glightbox">
                          <img
                            src={element?.itemImg}
                            className="menu-img img-fluid"
                            alt=""
                          />
                        </Link>
                        <h4>{element?.name}</h4>
                        <p className="ingredients">{element?.ingredients}</p>
                        <p className="price">{element?.price}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
