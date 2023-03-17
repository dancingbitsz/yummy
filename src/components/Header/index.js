import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navOptions } from "../../constants/DummyData";

const Header = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);

  //On load selected nav option
  useEffect(() => {
    let selectedRoute = navOptions?.filter(
      (option) => option?.path === location?.pathname
    );
    setIsActive(selectedRoute[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1>
            Yummy<span>.</span>
          </h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            {navOptions?.map((option, index) => {
              return (
                <li key={index}>
                  <Link
                    to={option?.path}
                    onClick={() => setIsActive(option?.id)}
                    className={`${isActive === option?.id ? "active" : ""}`}
                  >
                    {option?.name}
                  </Link>
                </li>
              );
            })}
            <li className="dropdown">
              <Link to="#">
                <span>Drop Down</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </Link>
              <ul>
                <li>
                  <Link to="#">Drop Down 1</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Drop Down 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 2</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Drop Down 2</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 3</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="btn-book-a-table" href="#book-a-table">
          Book a Table
        </a>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
};

export default Header;
