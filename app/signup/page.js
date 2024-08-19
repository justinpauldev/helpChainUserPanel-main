'use client';
import PageBanner from '@/components/PageBanner';
import ContisLayout from '@/layouts/ContisLayout';
import { signupAPI } from '@/services/api/auth';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Guest',
  });

  const [loading1, setLoading1] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);
    setError('');

    try {
      const response = await signupAPI(formData);
      console.log('Signup successful:', response);
      toast.success('Signup completed successfully!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Signup failed';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading1(false);
    }
  };
  return (
    <ContisLayout footer={2}>
      <PageBanner pageName={'WELCOME!'} pageTitle={'Create an account'} />

      <section className="auth_from pb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="auth_card">
                <form className="tf__blog_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Name (required)</label>
                        <input
                          type="text"
                          name="userName"
                          placeholder="Enter Name"
                          value={formData.userName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Email (required)</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Password (required)</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Confirm Password (required)</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="form-group">
                            <div className="form-check tf__blog_checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault2"
                              >
                                I accept <a href="#">terms and condition</a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <button
                          type="submit"
                          className="tf__common_btn tf__common_btn-cust w-100"
                          disabled={loading1}
                        >
                          {loading1 ? (
                            <div className="loaderAnime"></div>
                          ) : (
                            'Sign up'
                          )}
                          <i
                            className="fa-regular fa-arrow-right-long"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    {/* <div className="col-xl-12">
                      <p className="or text-center py-3 text-black text-uppercase fw-bold text-dark">
                        OR
                      </p>
                    </div> */}
                    {/* <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <button className="tf__common_btn tf__common_btn2 w-100">
                          Sign up with Google{' '}
                          <i className="fa-brands fa-google" />
                        </button>
                      </div>
                      <div className="text-center pt-3">
                        <span className="me-1">Already have an account ?</span>
                        <Link legacyBehavior href="/login">
                          <a>Login</a>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </ContisLayout>
  );
};
export default signup;
