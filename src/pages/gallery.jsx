import { useEffect } from "react";
import Portfolio from "../components/gallery/portfolio";
import VideoSection from "../components/home/video";
import GeneralBanner from "../components/main/banner";
import Form from "../components/main/form";
import { useSEO } from "../contexts/SEOcontext";
import FadeInSection from "../hooks/fadeComponent";

const Gallery = () => {
  const { setSeoData } = useSEO();

  useEffect(() => {
    setSeoData({
      title: "Marble Expert Treat Limited - Gallery",
      description:
        "Marble Expert Treat Ltd is a natural stone restoration company in Lagos, offering installation and maintenance of granite and marble across Nigeria.",
      keywords:
        "Gallery, Gallery Page, Marble, Rock, Rocks, natural, stone, restoration, expert, lagos, granite, Nigeria, marble rocks",
    });
  }, [setSeoData]);

  return (
    <>
      <GeneralBanner title={"Gallery"} />
      <FadeInSection
        children={<Portfolio />}
        className={"fade-in-top-section"}
      />
      <FadeInSection
        children={<VideoSection />}
        className={"fade-in-top-section"}
      />
      <FadeInSection
        className={"fade-in-left-section"}
        children={
          <Form
            textline={"APPOINTMENT"}
            title={"Get A Free Quote"}
            subtitle={"Please feel free to get in touch using the form below."}
          />
        }
      />
    </>
  );
};

export default Gallery;
