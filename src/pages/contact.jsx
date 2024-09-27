import { useEffect } from "react";
import ContactComponent from "../components/contact/contact";
import GeneralBanner from "../components/main/banner";
import { useSEO } from "../contexts/SEOcontext";

const Contact = () => {
  const { setSeoData } = useSEO();

  useEffect(() => {
    setSeoData({
      title: "Marble Expert Treat Limited - Contact Us",
      description:
        "Marble Expert Treat Ltd is a natural stone restoration company in Lagos, offering installation and maintenance of granite and marble across Nigeria.",
      keywords:
        "Contact, Contact Page, Marble, Rock, Rocks, natural, stone, restoration, expert, lagos, granite, Nigeria, marble rocks",
    });
  }, [setSeoData]);
  return (
    <>
      <GeneralBanner title={"Contact Us"} />
      <ContactComponent />
    </>
  );
};

export default Contact;
