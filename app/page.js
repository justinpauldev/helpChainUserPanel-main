'use client';
import Counter from '@/components/Counter';
import Faq, { Faq2 } from '@/components/Faq';
import Testimonial from '@/components/Testimonial';
import ContisLayout from '@/layouts/ContisLayout';
import Link from 'next/link';
import VoteArrow from '@/public/images/voteArrow.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchFundsAPI, voteAPI } from '@/services/api/funds';
import { toast } from 'react-toastify';
import LocalStorageService from '@/services/LocalStorageService';
const Index = () => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFunds = async () => {
      try {
        const result = await fetchFundsAPI();
        setFunds(result.data);
      } catch (error) {
        console.error('Error fetching funds:', error);
      } finally {
        setLoading(false);
      }
    };

    getFunds();
  }, []);

  const handleVote = async (fundId) => {
    const token = LocalStorageService.getToken();
    if (!token) {
      toast.error('Please login to vote');
      return;
    }

    setLoading(true);
    try {
      const result = await voteAPI(fundId);
      toast.success('Voted successfully');
      return result;
    } catch (error) {
      console.error('Vote failed:', error);
      const errorMessage = error.response?.data?.message || 'An error occurred';
      console.error('Error message:', errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <ContisLayout footer={1}>
      {/*============================
  BANNER START
    ==============================*/}
      <section className="tf__banner pt_160">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="tf__banner_text">
                <h6>POWERED BY STELLAR NETWORK</h6>
                <h1>Empower, Donate, Volunteer</h1>
                <p>
                  Connect with a blockchain-powered platform to donate,
                  volunteer, and support causes. Empower change and make a real
                  difference together
                </p>
                <Link legacyBehavior href="/signup">
                  <a className="tf__common_btn">
                    Sign up for free{' '}
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="tf__banner_img">
                <img
                  src="images/banner_img.png"
                  alt="banner img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BANNER END
    ==============================*/}
      {/*============================
  SERVICE START
    ==============================*/}
      <section className="tf__service">
        <div className="container">
          <div className="tf__brand pt_80 pb_65">
            <div className="row">
              <div className="col-xl-12">
                <div className="tf__brand_heading">
                  <h6>
                    Trusted <span>120 companies</span> across the world
                  </h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-2 col-sm-6 col-md-4">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-1.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-2.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-3.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-4.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-5.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tf__main_service pt_100 ml_70 mr_70 pb_75">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-md-8 m-auto">
                <div className="tf__common_heading">
                  <h6>Explore and Vote</h6>
                  <h2>Your Voice, Your Impact on Available Funds</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-9">
                <div className="row">
                  {funds.map((fund) => (
                    <div key={fund.id} className="col-xl-4 col-md-6 mb-4">
                      <div className="tf__single_service">
                        <div className="voteBtnMain">
                          <span>
                            <i className="ca-icon-edit-pen" />
                          </span>
                          <button
                            className="voteButton"
                            onClick={() => handleVote(fund.id)}
                            disabled={loading}
                          >
                            {loading ? 'Voting...' : 'Vote +1'}
                            <Image
                              className="VoteArrow"
                              src={VoteArrow}
                              alt="arrow"
                            />
                          </button>
                        </div>

                        <Link
                          legacyBehavior
                          href={`/use-cases-details/${fund.id}`}
                        >
                          <a className="tf__single_service_link">
                            {fund.title}
                          </a>
                        </Link>
                        <p>{fund.description}</p>
                        <div className="VoteCountMain">
                          <div className="voteProgressMain">
                            <p className="voteProgressPara">
                              End Date -{' '}
                              {new Date(fund.endDate).toLocaleDateString()}
                            </p>
                            <p className="voteProgressPara">
                              {fund.totalVotes}{' '}
                              {fund.totalVotes === 1 ? 'Vote' : 'Votes'}
                            </p>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="progress"
                              style={{ width: `${fund.votePercentage}%` }} // Adjust based on your data
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-3">
                <div className="tf__single_service_right">
                  <div className="tf__single_service_right_img">
                    <img
                      src="images/service_img.png"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                  <a href="#" className="tf__single_service_right_heading">
                    The Best feeling in the World
                  </a>
                  <p>Making someones dream come true.</p>
                  <Link legacyBehavior href="/signup">
                    <a className="tf__common_btn">
                      Donate for a smile
                      <i className="fa-regular fa-arrow-right-long" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  SERVICE END
    ==============================*/}
      {/*============================
  WORK PROCESS START
    ==============================*/}
      <section className="tf__work_process pt_100 pb_50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 m-auto">
              <div className="tf__common_heading">
                <h6>WORKING PROCESS</h6>
                <h2 className="tf__common_heading_color">
                  How Stellar based Helpchain Works
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 m-auto">
              <div className="tf__work_process_img">
                <img
                  src="images/work_img-1.png"
                  alt="process"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mx-auto">
              <div className="tf__process_accordion">
                <Faq2 />
              </div>
              <a href="##" className="tf__common_btn play_btn">
                Become a Volunteer
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-sm-12 m-auto">
              <div className="tf__counter mt_75">
                <div className="tf__counter_text">
                  <h2>
                    <Counter end={8000000} />+
                  </h2>
                  <h4>Dreams converted to reality</h4>
                </div>
                <div className="tf__counter_img">
                  <img
                    src="images/counter_img.png"
                    alt="counter"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  WORK PROCESS END
    ==============================*/}
      {/*============================
  CONTENT CREATOR START
    ==============================*/}
      <section className="tf__content_creator pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 m-auto">
              <div className="tf__common_heading">
                <h6>See how our volunteers helped others</h6>
                <h2 className="tf__common_heading_color">Our Volunteering</h2>
              </div>
            </div>
          </div>
          <div className="tf__content_creator_top">
            <div className="row">
              <div className="col-xl-4 col-lg-5 m-auto">
                <div className="tf__content_creator_top_img">
                  <img
                    src="images/creator_img-1.png"
                    alt="creator"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 mx-auto">
                <div className="tf__content_creator_top_text">
                  <h4>Blood donation camp in 6th harris street</h4>
                  <p>
                    This event happened on 12th Sep 2024, and has been a
                    memorable day for all our volunteers.
                  </p>
                  <ul>
                    <li>Donated 50L blood which will save lives</li>
                    <li>Educated and inspired other for the good deed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tf__content_creator_bottom">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="tf__single_content_creator_bottom">
                  <div className="tf__single_content_creator_bottom_img">
                    <img
                      src="images/creator_img-2.png"
                      alt="creator"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_content_creator_bottom_text">
                    <h4>Citywide Park Restoration Project</h4>
                    <p>
                      Participate in our Citywide Park Restoration Project to
                      clean and revitalize local parks. Spend the day working
                      with fellow volunteers, engaging in environmental
                      conservation, and enhancing the community’s green spaces.
                      Enjoy a fulfilling experience and contribute to a cleaner,
                      more beautiful city.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tf__single_content_creator_bottom">
                  <div className="tf__single_content_creator_bottom_img">
                    <img
                      src="images/creator_img-3.png"
                      alt="creator"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_content_creator_bottom_text">
                    <h4>Annual Food Distribution Drive</h4>
                    <p>
                      Join our Annual Community Food Distribution Drive to
                      assist in sorting and distributing essential food supplies
                      to families in need. This event provides an opportunity to
                      make a tangible impact in people’s lives, collaborate with
                      other dedicated volunteers, and support our community in
                      addressing food insecurity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  CONTENT CREATOR END
    ==============================*/}
      {/*============================
  TESTIMONIAL START
    ==============================*/}
      <section className="tf__testimonial pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 m-auto">
              <div className="tf__common_heading">
                <h6>From the people who got help</h6>
                <h2>Success Stories</h2>
              </div>
            </div>
          </div>
          <div className="tf__single_testimonial">
            <div className="testi_slider">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      {/*============================
  TESTIMONIAL END
    ==============================*/}

      {/*============================
  FAQ START
    ==============================*/}
      <section className="tf__faq pt_100 pb_240">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-8 m-auto">
              <div className="tf__common_heading tf__faq_common_heading">
                <h6>faq</h6>
                <h2 className="tf__common_heading_color">
                  Frequently asked question
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-md-8 col-lg-8 mx-auto">
              <Faq />
            </div>
          </div>
        </div>
      </section>
      {/*============================
  FAQ END
    ==============================*/}
    </ContisLayout>
  );
};
export default Index;
