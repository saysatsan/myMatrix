import axios from '../initial';

const usersData = {
  post: (params) => axios.post('/users', params)
    .then((data) => data)
    .catch((error) => console.log(error)),
};

export default usersData;
