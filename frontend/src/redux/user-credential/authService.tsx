import axios from 'axios';

const API_URL = 'https://velo-eat-online-food-ordering-backend.vercel.app/users';

const signin = async (userData: unknown) => {

  const response = await axios.post(API_URL + '/signin', userData);
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const signup = async (userData: unknown) => {

  const response = await axios.post(API_URL + '/signup', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const signout = () => {
  localStorage.removeItem('user');
}

const authService = { signup, signin, signout }
export default authService;