import ContactComponent from "../components/contact/contact";
import GeneralBanner from "../components/main/banner";

const Contact = () => {
    return (
       <>
        <GeneralBanner title={'Contact Us'}/>
        <ContactComponent />
       </>
    )
};

export default Contact;