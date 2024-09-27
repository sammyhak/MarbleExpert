import OwlCarousel from "react-owl-carousel";
import "../../styles/components/home/slider.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import arrowRightWhite from "../../assets/arrow-right-white.svg";
import { Link } from "react-router-dom";

const Slider = () => {
  const responsivity = {
    0: {
      items: 1, // Show 1 item on mobile
    },
    600: {
      items: 2, // Show 2 items on tablets
    },
    1000: {
      items: 4, // Show 3 items on desktops
    },
  };

  return (
    <section className="slider">
      <div className="row">
        <div className="container">
          <div className="text-line">
            <h6 className="primary__color">CHOOSE YOUR STONE</h6>
          </div>
          <h1 className="section__title secondary-color">
            Discover Our Creation
          </h1>
          <hr />
        </div>

        <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={10}
          responsive={responsivity}
          nav
        >
          <div class="item">
            <img src={img2} alt="marble" />
            <div className="overlay">
              <Link to="/gallery">
                <button className="btn primary__btn">
                  <div>
                    GALLERY <img src={arrowRightWhite} alt="" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div class="item">
            <img src={img3} alt="marble" />
            <div className="overlay">
              <Link to="/gallery">
                <button className="btn primary__btn">
                  <div>
                    GALLERY <img src={arrowRightWhite} alt="" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div class="item">
            <img src={img4} alt="marble" />
            <div className="overlay">
              <Link to="/gallery">
                <button className="btn primary__btn">
                  <div>
                    GALLERY <img src={arrowRightWhite} alt="" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div class="item">
            <img src={img5} alt="marble" />
            <div className="overlay">
              <Link to="/gallery">
                <button className="btn primary__btn">
                  <div>
                    GALLERY <img src={arrowRightWhite} alt="" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div class="item">
            <img src={img6} alt="marble" />
            <div className="overlay">
              <Link to="/gallery">
                <button className="btn primary__btn">
                  <div>
                    GALLERY <img src={arrowRightWhite} alt="" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div class="item">
            <img src={img7} alt="marble" />
            <div className="overlay">
              <Link to="/gallery">
                <button className="btn primary__btn">
                  <div>
                    GALLERY <img src={arrowRightWhite} alt="" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Slider;
