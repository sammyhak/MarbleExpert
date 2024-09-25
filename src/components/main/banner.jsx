import "../../styles/components/main/banner.scss";

const GeneralBanner = ({title}) => {
    return (
        <section className="generalBanner">
            <div className="container">
                <div className="content d-flex justify-content-center align-items-center">
                    <h1>About Us</h1>
                </div>
            </div>
        </section>
    )
};

export default GeneralBanner;