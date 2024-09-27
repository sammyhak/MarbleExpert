import "../../styles/components/home/banner.scss";
import bgVideo from "../../assets/Stone-Collection-exposure-boost-hero.mp4";
import arrowRight from "../../assets/arrow-right.svg";
import arrowRightWhite from "../../assets/arrow-right-white.svg";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="home__banner">
      <video autoPlay muted loop className="video-background">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
      <div className="container">
        <div className="content">
          <div className="text-line">
            <h2 className="text">Marble Expert Treat Ltd</h2>
          </div>

          <h1>Natural Stone Restoration Company In Lagos</h1>

          <div className="quick__buttons mt-4">
            <button className="btn btn__primary">
              <Link to='/gallery'> Our Gallery <img src={arrowRight} alt="arrow-right" /></Link>
            </button>
            <button className="btn btn__secondary">
              <Link to="/contact">Get in Touch <img src={arrowRightWhite} alt="" /></Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
