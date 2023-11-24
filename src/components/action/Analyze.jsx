import Action from './Action.jsx';
import Table from './table/Table.jsx';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Analyze = () => {
  const [state, setState] = useState(0);
  const [response, setResponse] = useState(null);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    console.log({ state });
  }, [state]);
  useEffect(() => {
    console.log({ response });
  }, [response]);

  return (
    <div className="presentation-wrapper">
      <div className="w-full flex flex-col gap-4">
        <motion.h1
          initial={{ transform: 'translateY(10rem)', opacity: 0 }}
          animate={{ transform: 'translateY(0rem)', opacity: 1 }}
          exit={{ transform: 'translateY(10rem)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 140,
            damping: 19,
          }}
          className="text-left w-full text-3xl"
        >
          Обработка видеофайлов
        </motion.h1>

        {!state ? (
          <Action
            setResponse={setResponse}
            setState={setState}
            state={state}
            setFiles={setFiles}
          />
        ) : (
          <Table state={state} response={response} files={files} />
        )}
      </div>
    </div>
  );
};

export default Analyze;
