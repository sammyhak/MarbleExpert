import "../../styles/components/home/about.scss";
import marble from "../../assets/marble1.svg";
import FadeInSection from "../../hooks/fadeComponent";
const About = () => {
  const SectionHeader = () => {
    return (
      <>
        <div className="section__header">
          <div className="text-line">
            <h6 className="primary__color">ABOUT US</h6>
          </div>
          <h1 className="section__title secondary-color">
            At Marble Expert Treat Limited, we deliver top-quality marble care
            solutions that exceed expectations.
          </h1>          
        </div>
      </>
    );
  };

  const SectionContent = () => {
    return (
      <div className="row d-flex justify-content-center">
        
      </div>
    );
  };
  return (
    <section className="about__us">
      <div className="row">
        <div className="col-md-6">
          <img src={marble} alt="marble" />
        </div>

        <div className="col-md-6">
          <div className="container h-100">
            <div className="d-flex align-items-center h-100">
            <FadeInSection
              children={<SectionHeader />}
              className={"fade-in-right-section"}
            /> 
            </div>           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
