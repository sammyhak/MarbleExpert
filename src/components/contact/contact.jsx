import "../../styles/components/contact/contact.scss";
import bathImg from "../../assets/bathroom.jpg";
import FadeInSection from "../../hooks/fadeComponent";
import Form from "../main/form";

const ContactComponent = () => {
  const SectionHeader = () => {
    return (
      <>
        <div className="text-line">
          <h6 className="primary__color">OUR CONTACT</h6>
        </div>
        <h1 className="section__title secondary-color">Get In Touch</h1>
        <hr />
      </>
    );
  };
  return (
    <section className="contact">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="container">
            <div className="content p-2 p-md-4">
              <FadeInSection
                children={<SectionHeader />}
                className={"fade-in-left-section section__header"}
              />

              <div className="items">
                <div className="item d-flex">
                  <div className="one d-flex mx-2 mt-2">
                    <i className="fi-br-map-location-track"></i>
                  </div>
                  <div className="two">
                    <h3>Visit Us</h3>
                    <p>No 13 Ganiu street ijaiye Lagos.</p>
                  </div>
                </div>

                <hr />

                <div className="item d-flex">
                  <div className="one d-flex mx-2 mt-2">
                    <i className="fi-sr-phone-call"></i>
                  </div>
                  <div className="two">
                    <h3>Contact Us</h3>
                    <p>08068069108</p>
                    <p>08056897455</p>
                    <p>07086191521</p>
                  </div>
                </div>

                <hr />

                <div className="item d-flex">
                  <div className="one d-flex mx-2 mt-2">
                    <i className="fi-br-envelope"></i>
                  </div>
                  <div className="two">
                    <h3>Email Us</h3>
                    <p>marbleexperttreatltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img src={bathImg} alt="img" />
        </div>
        <div className="col-12">
          <Form
            textline={"CONTACT US"}
            title={"How Can We Help You ?"}
            subtitle={
              "Please feel free to get in touch using the form below. We’d love to hear for you."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
