import VideoItem from './VideoItem.jsx';

const TableBody = ({state, response, files}) => {
  return (
    <> {
      state === 1
      ?
     (files.map((file, index) => 
     <VideoItem 
      key={`f_${index}`}
      id={index + 1}
      status={0}
      fileName={file}
      avg={null}
      type={''}
     />))  
      :
      (response && response.length && response.map((video, index) => (
        <VideoItem
          key={`v_${index}`}
					id={index + 1}
          status={1}
          fileName={video.filename}
          avg={video.avg}
          type={video.class_name}
        />
      )))
    }
    </>
  );
};

export default TableBody;
