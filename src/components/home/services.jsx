import FadeInSection from "../../hooks/fadeComponent";
import "../../styles/components/home/services.scss";

const Services = ({CardData}) => {  
  const SectionHeader = () => {
    return (
      <>
        <div className="text-line">
          <h6 className="primary__color">WHAT WE DO</h6>
        </div>
        <h1 className="section__title secondary-color">
          Provides Best Services
        </h1>
        <hr />
      </>
    );
  };

  const SectionContent = () => {
    return (
      <div className="row d-flex justify-content-center">
        {CardData?.map((card, index) => {
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
    <section className="services">
      <div className="container">
        <div className="section__header">
          <FadeInSection
            children={<SectionHeader />}
            className={"fade-in-left-section"}
          />

          <FadeInSection
            children={<SectionContent />}
            className={"fade-in-top-section"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
