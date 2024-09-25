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
            At Marble Expert Treat Limited, our mission is to deliver
            exceptional marble care solutions that exceed our clients'
            expectations.
          </h1>
          <h5 className="font-bold">We strive to:</h5>
          <hr />
        </div>
      </>
    );
  };

  const ListItems = () => {
    return (
      <div className="row">
        <div className="list-items">
          <ul className="list">
            <li>
              Preserve the natural beauty and durability of marble surfaces.
            </li>
            <li>
              Foster long-term relationships through reliability, expertise, and
              integrity.
            </li>
            <li>
              Stay at the forefront of industry innovations, embracing
              sustainable practices.
            </li>
            <li>
              Enhance the aesthetic and functional value of our clients'
              properties.
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <section className="about__us">
      <div className="row m-2">
        <div
          className="col-md-6"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={marble}
            alt="marble"
            style={{ maxHeight: "600px", margin: "20px" }}
            className="d-none d-md-block"
          />
          <img
            src={kitchen}
            alt="marble"
            style={{ maxHeight: "600px", margin: "20px" }}
            className="d-md-none"
          />
        </div>

        <div className="col-md-6">
          <div className="container">
            <FadeInSection
              children={<SectionHeader />}
              className={"fade-in-right-section"}
            />

            <FadeInSection children={<ListItems />} className={"fade-in-top-section"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarble;
