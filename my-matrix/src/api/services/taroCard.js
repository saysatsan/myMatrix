import axios from '../initial';

const taroCard = {
  get: (id) => axios.get(`/arcans/${id}`)
    .then((data) => {
      if (data.status > 399) {
        throw new Error('Error getting taro card');
      }

      return data.data;
    })
    .catch((error) => console.log(error)),
  put: (id, params) => axios.put(`/arcans/${id}`, params),
};

export default taroCard;
