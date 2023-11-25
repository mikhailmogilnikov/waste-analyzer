import axios from 'axios';

const post = (postData) => new Promise((res, rej) => {
  const formData = new FormData();
  postData.map((item, index) => {
    formData.append(index, item.file, item.name ? item.name : ""  );
  });
  console.log({ formData });
  axios
    .post('http://127.0.0.1:5000/api/upload', formData)
    .then((response) => {
      console.log('File uploaded successfully', response.data);
      res(response.data);
    })
    .catch((error) => {
      console.error('Error uploading file', error);
      rej(error);
    });
})

export default post;
