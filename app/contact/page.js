import PageBanner from "@/components/PageBanner";
import ContisLayout from "@/layouts/ContisLayout";
const contact = () => {
  return (
    <ContisLayout footer={3}>
      <PageBanner pageName={"contact us"} pageTitle={"Contact us"} />
      {/*============================
  CONTACT START
    ==============================*/}
      <section className="tf__contact pb_100">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-center">
            <div className="col-xl-5 col-md-6">
              <div className="tf__contact_area">
                <span>
                  <i className="fas fa-comment-alt-lines" aria-hidden="true" />
                </span>
                <div className="tf__contact_icon_text">
                  <p>Email us</p>
                  <a href="mailto:example@gmail.com">support@contis.ai</a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__contact_area">
                <span>
                  <i className="fas fa-phone-alt" />
                </span>
                <div className="tf__contact_icon_text">
                  <p>Call us</p>
                  <a href="callto:123456789">(123) 431 3456</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  CONTACT END
    ==============================*/}
      {/*============================
  CONTACT FORM START
    ==============================*/}
      <section className="tf__contact_form pt_90 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mx-auto">
              <div className="tf__common_heading tf__common_heading2 tf__benefits_heading">
                <h2 className="tf__common_heading_color">Send us a message</h2>
                <p>
                  Fill out the form and our team will get back to you as quickly
                  as we can.
                </p>
                <ul className="tf__contact_icon d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <img className="svg" src="./svg/facebook.svg" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./svg/instagram.svg" alt className="svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./svg/twitter.svg" alt className="svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 mx-auto">
              <form className="tf__blog_form">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Label (required)</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Label (required)</label>
                      <input type="text" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Label (required)</label>
                      <input type="text" placeholder="Phone number" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Email (required)</label>
                      <input type="text" placeholder="Email address" />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Message (required)</label>
                      <textarea
                        rows={4}
                        placeholder="Type your message here"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="form-check tf__signup_check_area tf__blog_checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault2"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </label>
              </div>
              <button className="tf__common_btn">
                Sign up for free
                <i
                  className="fa-regular fa-arrow-right-long"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  CONTACT FORM END
    ==============================*/}
    </ContisLayout>
  );
};
export default contact;
