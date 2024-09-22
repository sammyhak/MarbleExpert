import { useEffect } from "react";
import { useSEO } from "../contexts/SEOcontext";
import HomeBanner from "../components/home/banner";
import Services from "../components/home/services";
import About from "../components/home/about";
import Slider from "../components/home/slider";

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

  return (
    <>
      <HomeBanner />
      <Services />
      <About />
      <Slider />
    </>
  );
};

export default Home;
