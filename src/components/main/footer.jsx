import "../../styles/components/main/footer.scss";
import MarbleLogo from "../../assets/marbleLogoLarge.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-4 col-lg-3">
            <img src={MarbleLogo} alt="" />
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="footer-title">
                <h5>Information</h5>
            </div>

            <div className="links">
              <div className="link">
                <Link to="/">Main</Link>
              </div>
            </div>

            <div className="links">
              <div className="link">
                <Link to="/services">Our Services</Link>
              </div>
            </div>

            <div className="links">
              <div className="link">
                <Link to="/about">About Us</Link>
              </div>
            </div>

            <div className="links">
              <div className="link">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="footer-title">
                <h5>Get in Touch</h5>
            </div>

            <div className="links">
              <div className="link d-flex">
                <i className="fi-br-map-location-track"></i> No 13 Ganiu street
                ijaiye Lagos.
              </div>

              <div className="link mt-4 mt">
                <i className="fi-br-phone-call"></i> 08068069108, 08056897455, 07086191521
              </div>

              <div className="link">
                <i className="fi-br-envelope"></i> marbleexperttreatltd@gmail.com
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 social__media">
            <div className="footer-title">
                <h5>Follow us</h5>
            </div>

            <div className="links d-flex">
              <div className="link mr-2">
                <i className="fi-brands-instagram"></i>{" "}
                <a href="https://www.instagram.com"></a>
              </div>

              <div className="link mr-2">
                <i className="fi-brands-facebook"></i>{" "}
                <a href="https://www.facebook.com"></a>
              </div>

              <div className="link mr-2">
                <i className="fi-brands-twitter"></i>{" "}
                <a href="https://www.twitter.com"></a>
              </div>

              <div className="link mr-2">
                <i className="fi-brands-whatsapp"></i>{" "}
                <a href="https://www.whatsapp.com"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
