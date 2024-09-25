import "../../styles/components/contact/contact.scss";
import bathImg from "../../assets/bathroom.jpg";
import FadeInSection from "../../hooks/fadeComponent";

const ContactComponent = () => {
  const SectionHeader = () => {
    return (
      <>
        <div className="text-line">
          <h6 className="primary__color">OUR CONTACT</h6>
        </div>
        <h1 className="section__title secondary-color">
          Get In Touch
        </h1>
        <hr />
      </>
    );
  };
  return (
    <section className="contact">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="container">
            <div className="content p-4">
                <FadeInSection children={<SectionHeader />} className={"fade-in-left-section section__header"}/>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img src={bathImg} alt="img" />
        </div>
        <div className="col-12">
          <div className="container">
            <div className="d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
