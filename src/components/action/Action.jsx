import { CircleNotch, CloudArrowUp } from '@phosphor-icons/react';
import '../../styles/action.scss';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import post from '../../scripts/post.js';
import Good from './Good';
import Errors from './Errors';
import { multiUploader } from "../../scripts/videoConv";


const Action = () => {

  const [state, setState] = useState(0);
  const [response, setResponse] = useState(null);

  const changeState = () => {
    setState(0);
    setResponse(null);
  };

  const onDrop = async (acceptedFiles) => {
    multiUploader(acceptedFiles).then((result) => {
      console.log({ multiUploader: result });
      post(result);
    });
  }

  const passive = <p className="low-opacity">Ожидание скан-образа (.pdf, .docx).</p>
  const awating =  <p style={{ color: '#dad71e' }}>
      Ожидание проверки. Пожалуйста, подождите.
    </p>

  return (
    <div className="presentation-wrapper">
      <div className="map-wrapper">
        <div className="map-header">
          <h1>Онлайн-анализатор документов</h1>
          {state === 0 && passive}
          {state === 1 && awating}
        </div>
        {state === 0 ? (
          <Dropzone
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
        ) : (
          <>
            {
              state === 1
              &&
              <div style={{ padding: '100px' }}>
                <CircleNotch
                  weight="bold"
                  className="icon-big loader low-opacity"
                />
            </div>
            } 
            {
              response
              &&
              response.errors.length === 0
              &&
              state === 2
              &&
              <Good data={response}/>
            }
            {
              response
              &&
              response.errors.length > 0
              &&
              state === 2
              &&
              <Errors data={response}/>
            }


            {
              state === 2
              &&
              <div className="button-wrapper" style={{ maxWidth: '400px' }}>
                <div
                  style={{ marginTop: '40px' }}
                  onClick={changeState}
                  className="button select-zoom"
                >
                  <p>Отмена</p>
                </div>
              </div>
            }
            
          </>
        )}
      </div>
    </div>
  );
};

export default Action;

