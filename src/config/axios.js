import axios from 'axios';

const instance = axios.create({
  baseURL: `https://us-central1-gunshop-7b627.cloudfunctions.net/api`
});

// const instance = axios.create({
//   baseURL: 'http://localhost:5001/gunshop-7b627/us-central1/api'
// });

export default instance;
