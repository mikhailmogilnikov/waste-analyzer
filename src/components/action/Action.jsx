import { CloudArrowUp } from '@phosphor-icons/react';
import '../../styles/action.scss';
import Dropzone from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import post from '../../scripts/post.js';
import { multiUploader } from '../../scripts/videoConv';

const Action = ({ setResponse, setState, state, setFiles }) => {
  const onDrop = async (acceptedFiles) => {
    setState(1);
    setFiles(acceptedFiles.map((item) => item.name));
    multiUploader(acceptedFiles).then((result) => {
      console.log({ multiUploader: result });
      post(result)
        .then((response) => {
          setResponse(response.answers);
        })
        .finally(() => setState(2));
    });
  };

  return (
    <AnimatePresence>
      {!state && (
        <motion.div
          initial={{ transform: 'translateY(20rem)', opacity: 0 }}
          animate={{ transform: 'translateY(0rem)', opacity: 1 }}
          exit={{ transform: 'translateY(20rem)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 140,
            damping: 19,
          }}
          className="w-full"
        >
          <Dropzone
            onDrop={onDrop}
            accept={{ 'video/mp4': ['.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv', '.webm', '.3gp'] }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="attach-field relative">
                <input {...getInputProps()} />

                <CloudArrowUp className="icon-attach" />
                <h2>Прикрепите файл или перетащите его в это поле</h2>
                <p className="absolute font-normal text-xs max-w-[16rem] bottom-10 mx-auto opacity-50">
                  Поддерживаемые форматы: mp4, avi, mkv, mov, wmv, flv, webm,
                  3gp
                </p>
              </div>
            )}
          </Dropzone>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Action;
