import AboutMarble from "../components/about/about";
import Services from "../components/home/services";
import GeneralBanner from "../components/main/banner";
import Form from "../components/main/form";
const About = () => {
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
  return (
    <>
      <GeneralBanner title={"About Us"} />
      <AboutMarble />
      <Services CardData={CardData} />
      <Form
        textline={"APPOINTMENT"}
        title={"Get A Free Quote"}
        subtitle={
          "Please feel free to get in touch using the form below."
        }
      />
    </>
  );
};

export default About;
