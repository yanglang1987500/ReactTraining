import axios from 'axios'; 

const Api = {
  axios: axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8081/' : ''
  }),
  axiosPure: axios,
  comment: {
    list: '/comment/list',
    add: '/comment/add',
    remove: '/comment/remove/',
  },
};

export default Api;