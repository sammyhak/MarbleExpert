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
      title: "Sales of Marble, Granite, and other natural stone materials.",
      text: "There are many variations of passages of Lorem Ipsum available majority",
      icon1: <i className="fi-br-floor"></i>,
      icon2: <i className="fi-br-floor d-flex  ml-auto light"></i>,
    },
  ];
  return (
    <section className="services">
      <div className="container">
        <div className="section__header">
          <div className="text-line">
            <h6 className="primary__color">WHAT WE DO</h6>
          </div>
          <h1 className="section__title secondary-color">
            Provides Best Services
          </h1>
          <hr />

          <div className="row">
            {CardData.map((card, index) => {
              return (
                <div className="col-md-4 mt-4" key={index}>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
