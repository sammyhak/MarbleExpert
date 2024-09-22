import FadeInSection from "../../hooks/fadeComponent";
import "../../styles/components/home/services.scss";

const Services = () => {
  const CardData = [
    {
      title: "Premium Natural Stone Solutions",
      text: "We offer premium marble, granite, and other natural stone materials. From elegant countertops to stylish flooring, our collection enhances any space. Enjoy expert guidance and quality products to achieve your design vision. Transform your home with our stunning stone solutions!",
      icon1: <i className="fi-br-floor"></i>,
      icon2: <i className="fi-br-floor d-flex  ml-auto light"></i>,
    },
    {
      title: "Comprehensive General Contracting Services",
      text: "At our company, we offer expert general contracting services for residential, commercial, and industrial projects. Whether you're building your dream home, renovating an office space, or managing large-scale industrial developments, our dedicated team ensures quality craftsmanship and seamless project execution. Let us turn your vision into reality!",
      icon1: <i className="fi-br-floor"></i>,
      icon2: <i className="fi-br-floor d-flex  ml-auto light"></i>,
    },
    {
      title: "Specialized Marble Care Services.",
      text: "We provide expert marble care services, including cleaning, restoration, sealing, and polishing. Our skilled team is dedicated to preserving the beauty and longevity of your marble surfaces, ensuring they look stunning and remain protected. Trust us to enhance and maintain your marble’s elegance!",
      icon1: <i className="fi-br-floor"></i>,
      icon2: <i className="fi-br-floor d-flex  ml-auto light"></i>,
    },
  ];
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
