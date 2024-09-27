import { useEffect } from "react";
import { useSEO } from "../contexts/SEOcontext";
import HomeBanner from "../components/home/banner";
import Services from "../components/home/services";
import About from "../components/home/about";
import Slider from "../components/home/slider";
import VideoSection from "../components/home/video";
import Form from "../components/main/form";

const Home = () => {
  const { setSeoData } = useSEO();

  useEffect(() => {
    setSeoData({
      title: "Marble Expert Treat Limited",
      description:
        "Marble Expert Treat Ltd is a natural stone restoration company in Lagos, offering installation and maintenance of granite and marble across Nigeria.",
      keywords:
        "Home, Home Page, Marble, Rock, Rocks, natural, stone, restoration, expert, lagos, granite, Nigeria, marble rocks",
    });
  }, [setSeoData]);

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
      <HomeBanner />
      <Services CardData={CardData} />
      <About />
      <Slider />
      <VideoSection />
      <Form
        textline={"CONTACT US"}
        title={"How Can We Help You ?"}
        subtitle={
          "Please feel free to get in touch using the form below. We’d love to hear for you."
        }
      />
    </>
  );
};

export default Home;
