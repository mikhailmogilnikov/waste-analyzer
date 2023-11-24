import Action from './Action.jsx';
import Table from './table/Table.jsx';
import {useEffect, useState} from 'react';
const Analyze = () => {
  const [state, setState] = useState(0);
  const [response, setResponse] = useState(null);
  const [files, setFiles] = useState(null);


  useEffect(() => {console.log({state})}, [state])
  useEffect(() => {console.log({response})}, [response])

 
  return (
    <div className="presentation-wrapper">
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-left w-full text-3xl">Обработка видеофайлов</h1>
        {
          !state 
        ? 
          <Action setResponse={setResponse} setState={setState} setFiles={setFiles}/> 
        :
          <Table state={state} response={response} files={files}/> 
         }
      </div>
    </div>
  );
};

export default Analyze;
