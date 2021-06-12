import axios from './http-common';

/************************* user index image upload *************************/
export const imageUpload = async (userImg) => {
  const randomId = "userId" + Math.floor(Date.now() / 1000);
  return await axios.post(`/users/upload`, {image: userImg, userId: randomId})
    .then(data => data.data)
    .catch(error => { throw error.response.data });
};