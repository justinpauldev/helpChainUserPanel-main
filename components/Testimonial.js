'use client';
import Slider from 'react-slick';

const Testimonial = () => {
  function Arrow(props) {
    const { onClick, iconClass } = props;
    return <i onClick={onClick} className={iconClass}></i>;
  }

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    nextArrow: <Arrow iconClass="fa-regular fa-arrow-right-long nextArrow" />,
    prevArrow: <Arrow iconClass="fa-regular fa-arrow-left-long prevArrow" />,
  };
  return (
    <Slider {...sliderProps}>
      <div>
        <div className="tf__testimonial_item">
          <div className="tf__testimonial_img">
            <img
              src="images/testimonial_img.png"
              alt="testimonial"
              className="img-fluid w-100"
            />
          </div>
          <div className="tf__testimonial_text">
            <h4>
              TFrom Struggle to Strength: How Your Donations Changed My Life
            </h4>
            <p>
              Before discovering this platform, I was struggling to provide for
              my family. With the help of the donations and support I received,
              we’ve been able to rebuild our lives. I found not only financial
              assistance but also a community that cares. This platform didn’t
              just give us a helping hand—it gave us hope and a chance for a
              better future. I’m deeply grateful for the change it has brought
              to our lives.
            </p>
            <div className="tf__calients_name">
              <h6>- Sukhuya Murtu</h6>
              <p>London</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="tf__testimonial_item">
          <div className="tf__testimonial_img">
            <img
              src="images/testimonial_img.jpg"
              alt="testimonial"
              className="img-fluid w-100"
            />
          </div>
          <div className="tf__testimonial_text">
            <h4>The any word software is a great and effactive tool…</h4>
            <p>
              I used the 7 day trial was impressed by the writing aihut created.
              I wrote several posts with it on Facebook then used it to wrete an
              Article on Linkedin. aihut makes me feel very smart because it
              generated ideas from my ideas.
            </p>
            <div className="tf__calients_name">
              <h6>-Kahala Williams</h6>
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonial;
