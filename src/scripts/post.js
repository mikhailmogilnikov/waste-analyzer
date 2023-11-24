import axios from 'axios';

const post = (postData) => {
  const formData = new FormData();
  postData.map((item, index) => {
    formData.append(index, item.file, item.name ? item.name : ""  );
  });
  console.log({ formData });
  axios
    .post('http://127.0.0.1:5000/upload', formData)
    .then((response) => {
      console.log('File uploaded successfully', response.data);
    })
    .catch((error) => {
      console.error('Error uploading file', error);
    });
};

export default post;
