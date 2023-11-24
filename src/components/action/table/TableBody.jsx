import VideoItem from './VideoItem.jsx';
import testData from '../testData.js';

const TableBody = () => {
  return (
    <>
      {testData.map((video) => (
        <VideoItem
          key={video.id}
					id={video.id}
          status={video.status}
          fileName={video.fileName}
          response={video.response}
        />
      ))}
    </>
  );
};

export default TableBody;
