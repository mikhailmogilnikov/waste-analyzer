import { CloudArrowUp } from '@phosphor-icons/react';
import '../../styles/action.scss';
import Dropzone from 'react-dropzone';
import post from '../../scripts/post.js';
import { multiUploader } from "../../scripts/videoConv";


const Action = ({
  setResponse, setState, setFiles
}) => {
  const onDrop = async (acceptedFiles) => {
    setState(1);
    setFiles(acceptedFiles.map(item => item.name));
    multiUploader(acceptedFiles).then((result) => {
      console.log({ multiUploader: result });
      post(result).then(response => {
        setResponse(response.answers);
      }).finally(() => setState(2))
    });
  }

  return (
    <div className="presentation-wrapper">
      <div className="map-wrapper"> 
          (<Dropzone
          onDrop={onDrop}
          accept={{ "video/mp4": [".mp4"] }}
          maxFiles={99}
        >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="attach-field">
                <input {...getInputProps()} />

                <CloudArrowUp className="icon-attach" />
                <h2>Прикрепите файл или перетащите его в это поле</h2>
              </div>
            )}
          </Dropzone>
      </div>
    </div>
  );
};

export default Action;

