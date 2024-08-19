import AxiosInstance from '../ApiRequests';
import ProtectedAxiosInstance from '../ProtectedAxiosInstance';

export const fetchFundsAPI = async () => {
  try {
    const response = await AxiosInstance.get('/funds');
    return response.data;
  } catch (error) {
    console.error('Fetch funds error:', error);
    throw error;
  }
};

export const voteAPI = async (fundId) => {
  try {
    const response = await ProtectedAxiosInstance.post(`/vote`, { fundId });
    return response.data;
  } catch (error) {
    console.error('Voting error:', error);
    throw error;
  }
};
