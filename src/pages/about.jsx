import AboutMarble from "../components/about/about";
import Services from "../components/home/services";
import GeneralBanner from "../components/main/banner";
const About = () => {
  return (
    <>
      <GeneralBanner title={"About Us"} />
      <AboutMarble />
      <Services />
    </>
  );
};

export default About;
