import axios from '../initial';

const taroCards = {
  get: () => axios.get('/arcans')
    .then((data) => {
      if (data.status > 399) {
        throw new Error('Error getting taro cards');
      }

      return data.data;
    })
    .catch((error) => console.log(error)),
  post: (params) => axios.post('/arcans', params)
    .then((data) => data)
    .catch((error) => console.log(error)),
};

export default taroCards;
