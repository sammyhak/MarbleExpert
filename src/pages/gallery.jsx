import Portfolio from "../components/gallery/portfolio";
import GeneralBanner from "../components/main/banner";
import Form from "../components/main/form";
import FadeInSection from "../hooks/fadeComponent";

const Gallery = () => {
  return (
    <>
      <GeneralBanner title={"Gallery"} />
      <FadeInSection children={<Portfolio />} className={"fade-in-top-section"} />
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
