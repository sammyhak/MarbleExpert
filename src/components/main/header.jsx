import { Link, useLocation } from "react-router-dom";
import RoutesMain from "../../router/routes";
import "../../styles/components/main/header.scss";
import MarbleLogo from "../../assets/marbleLogo.svg";
import arrowRightWhite from "../../assets/arrow-right-white.svg";

const Header = () => {
  const routes = RoutesMain();

  const currentPage = useLocation();

  return (
    <section className="header">
      <div className="container d-flex justify-content-between w-100 p-4">
        <div className="logo">
          <img src={MarbleLogo} alt="logo" />
        </div>

        <div className="navbar d-flex">
          {routes.map((route) => {
            return (
              <span
                key={route.path}
                className={currentPage.pathname === route.path ? "active" : ""}
              >
                <Link to={route.path}> {route.name} </Link>
              </span>
            );
          })}

          <button className="btn secondary__btn">
            <div>Get Quote <img src={arrowRightWhite} alt="" /></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
