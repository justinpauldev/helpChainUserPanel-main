import AxiosInstance from '../ApiRequests';

export const loginAPI = async (data) => {
  try {
    const response = await AxiosInstance.post('/auth/login', data);
    const { token } = response.data;

    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signupAPI = async (data) => {
  try {
    const response = await AxiosInstance.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};
