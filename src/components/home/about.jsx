import "../../styles/components/home/about.scss";
import marble from "../../assets/marble1.svg";
const About = () => {
  return (
    <section className="about__us">
      <div className="row">
        <div className="col-md-6">
          <img src={marble} alt="marble" />
        </div>

        <div className="col-md-6">
          <div className="container">
            <div className="section__header">
              <div className="text-line">
                <h6 className="primary__color">ABOUT US</h6>
              </div>
              <h1 className="section__title secondary-color">
                At Marble Expert Treat Limited, we deliver top-quality marble
                care solutions that exceed expectations.
              </h1>
              <p>At Marble Expert Treat Limited, we focus on:</p>
              <hr />

              <div className="row">
                <div className="col-md-6"></div>

                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default About;
