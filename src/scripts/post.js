import axios from 'axios';

const post = (fileContents, file, setState, setResponse) => {
  const formData = new FormData();
  formData.append(
    'file',
    new Blob([fileContents], { type: file.type }),
    file.name,
  );
  axios
    .post('http://127.0.0.1:5000/upload', formData)
    .then((response) => {
      console.log('File uploaded successfully', response.data);
      setState(2);
      setResponse(response.data);
    })
    .catch((error) => {
      console.error('Error uploading file', error);
      setState(0);
    });
};

export default post;
