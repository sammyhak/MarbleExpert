import { Link, useLocation } from "react-router-dom";
import RoutesMain from "../../router/routes";
import "../../styles/components/main/header.scss";
import MarbleLogo from "../../assets/marbleLogo.svg";
import arrowRightWhite from "../../assets/arrow-right-white.svg";
import { useState } from "react";

const Header = () => {
  const routes = RoutesMain();

  const currentPage = useLocation();

  const [visibility, setVisibility] = useState(false);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="navigation">
      <section className="header">
        <div className="container d-flex justify-content-between w-100 p-4">
          <div className="logo">
            <img src={MarbleLogo} alt="logo" />
          </div>

          <div className="navbar d-flex">
            {routes.map((route) => {
              return (
                <>
                  {route.name && (
                    <span
                      key={route.path}
                      className={
                        currentPage.pathname === route.path ? "active" : ""
                      }
                    >
                      <Link to={route.path}> {route.name} </Link>
                    </span>
                  )}
                </>
              );
            })}

            <button
              className="btn secondary__btn"
              onClick={() => scrollToElement("contact")}
            >
              <div>
                Get Quote <img src={arrowRightWhite} alt="" />
              </div>
            </button>
          </div>
          {/* mobile nav icon */}
          <div className="btn-mobile">
            <i
              className="fas fa-bars"
              onClick={() => setVisibility(!visibility)}
            ></i>
          </div>
        </div>
      </section>

      {visibility && (
        <div className="mobile-nav">
          <div className="navbar">
            {routes.map((route) => {
              return (
                <>
                  {route.name && (
                    <span
                      key={route.path}
                      className={
                        currentPage.pathname === route.path ? "active" : ""
                      }
                    >
                      <Link to={route.path}> {route.name} </Link>
                    </span>
                  )}
                </>
              );
            })}

            <button
              className="btn secondary__btn"
              onClick={() => scrollToElement("contact")}
            >
              <div>
                Get Quote <img src={arrowRightWhite} alt="" />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
