import "../../styles/components/gallery/portfolio.scss";
import img8 from "../../assets/m1.jpg";
import img9 from "../../assets/m2.jpg";
import img10 from "../../assets/m3.jpg";
import img11 from "../../assets/m4.jpg";
import img12 from "../../assets/m5.jpg";
import img13 from "../../assets/m6.jpg";
import img14 from "../../assets/m7.jpg";
import img15 from "../../assets/m8.jpg";
import img16 from "../../assets/m9.jpg";
import img17 from "../../assets/m10.jpg";
import img18 from "../../assets/m11.jpg";
import img19 from "../../assets/m12.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="section__header">
          <div className="text-line">
            <h6 className="primary__color">LATEST CREATION</h6>
          </div>
          <h1 className="section__title secondary-color">
            Discover Our Creation
          </h1>
          <hr />
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img8} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img9} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img10} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img11} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img12} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img13} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img14} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img15} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img16} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img17} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img18} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img19} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img2} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img3} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img4} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img5} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img6} alt="img" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
                <img src={img7} alt="img" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
