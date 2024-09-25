import "../../styles/components/home/about.scss";
import marble from "../../assets/aboutImg.png";
import kitchen from "../../assets/kitchen.png";
import FadeInSection from "../../hooks/fadeComponent";
const AboutMarble = () => {
  const SectionHeader = () => {
    return (
      <>
        <div className="section__header">
          <div className="text-line">
            <h6 className="primary__color">ABOUT US</h6>
          </div>
          <h1 className="section__title secondary-color">
          At Marble Expert Treat Limited, our mission is to deliver exceptional marble care solutions that exceed our clients' expectations.
          </h1>
          <p>We strive to:</p>
          <hr />
        </div>
      </>
    );
  };

  const SectionContent = () => {
    return <div className="row d-flex justify-content-center"></div>;
  };
  return (
    <section className="about__us">
      <div className="row">
        <div
          className="col-md-6"
          style={{
            position: 'relative',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",            
          }}
        >
          <img src={marble} alt="marble" style={{maxHeight: "600px", margin: "20px"}} className="d-none d-md-block" />
          <img src={kitchen} alt="marble" style={{maxHeight: "600px", margin: "20px"}} className="d-md-none"/>
        </div>

        <div className="col-md-6">
          <div className="container">
            <FadeInSection
              children={<SectionHeader />}
              className={"fade-in-right-section"}
            />
            <div className="row">
              <div className="col-md-6"></div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarble;
