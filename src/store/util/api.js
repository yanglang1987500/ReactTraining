import axios from 'axios'; 

const Api = {
  axios: axios.create({
    withCredentials: process.env.NODE_ENV === 'development' ? true : false,
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : ''
  }),
  axiosPure: axios,
};

export default Api;