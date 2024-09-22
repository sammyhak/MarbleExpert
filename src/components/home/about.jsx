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
          <p>At Marble Expert Treat Limited, we focus on:</p>
          <hr />
        </div>
      </>
    );
  };

  const SectionContent = () => {
    return (
      <div className="row d-flex justify-content-center">
        {CardData.map((card, index) => {
          return (
            <div className="col-lg-4 col-md-6 mt-4" key={index}>
              <div className="card p-4">
                <div className="d-flex">
                  {card.icon1}
                  {card.icon2}
                </div>

                <div className="card-title">
                  <h3>{card.title}</h3>
                </div>

                <div className="card-text">
                  <p className="mt-4">{card.text}</p>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
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

export default About;
