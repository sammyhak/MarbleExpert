import "../../styles/components/main/form.scss";

const Form = ({ textline, subtitle, title }) => {
  return (
    <section className="form" id="contact">
      <div className="container">
        <div className="section__header">
          <div className="text-line">
            <h6 className="primary__color">{textline}</h6>
          </div>
          <h1 className="section__title secondary-color">
            {title}
          </h1>
          <p>
            {subtitle}
          </p>
        </div>
        <form className="row">
          <div class="form-group col-6 mt-4">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div class="form-group col-6 mt-4">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group col-6 mt-4">
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div class="form-group col-6 mt-4">
            <input
              type="text"
              className="form-control"
              id="projectScope"
              placeholder="Project Scope"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              className="form-control"
              id="requirements"
              rows="3"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <div className="submit-button col-12">
            <button type="submit" class="btn mt-4 mb-4">
              SEND NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
