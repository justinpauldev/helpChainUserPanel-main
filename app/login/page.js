'use client';
import PageBanner from '@/components/PageBanner';
import ContisLayout from '@/layouts/ContisLayout';
import { loginAPI } from '@/services/api/auth';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import LocalStorageService from '@/services/LocalStorageService';
const login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  console.log('error', error);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginAPI(formData);
      LocalStorageService.setToken(response.token); // Store the token
      console.log('Login successful:', response);
      toast.success('Login successful.');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ContisLayout footer={2}>
      <PageBanner pageName={'WELCOME BACK!'} pageTitle={'Login to countinue'} />

      <section className="auth_from pb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="auth_card">
                <form className="tf__blog_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Email (required)</label>
                        <input
                          name="email"
                          type="text"
                          placeholder="Enter Email"
                          value={formData.emailOrUsername}
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
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <a href="#" className="small">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <button className="tf__common_btn w-100">
                          Login in
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
                          Sign in with Google{' '}
                          <i className="fa-brands fa-google" />
                        </button>
                      </div>
                      <div className="text-center pt-3">
                        <span className="me-1">Don't have an account?</span>
                        <Link legacyBehavior href="/signup">
                          <a>Sign up</a>
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
export default login;
