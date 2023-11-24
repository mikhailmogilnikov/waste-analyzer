import { CheckCircle, Clock } from '@phosphor-icons/react';
import { Spinner } from '@nextui-org/spinner';

const VideoItem = ({ id, status, fileName, type = '', avg }) => {
  let itemStyles = '';
  let statusIcon;
  let responseName;
  if (id % 2 === 0) {
    itemStyles = 'bg-[#efefef] dark:bg-white/10';
  }
  switch (status) {
    case 1:
      statusIcon = (
        <CheckCircle
          weight="fill"
          className="absolute text-green-500 w-7 h-7 -translate-y-[4px]"
        />
      );
      break;
    case 0:
      statusIcon = <Spinner size="sm" className="absolute translate-x-[3px]" />;
      break;
    default:
      statusIcon = (
        <Clock className="absolute text-white/50 w-6 h-6 translate-x-[1px] -translate-y-[2px]" />
      );
  }
  switch (type) {
    case 'Beton':
      responseName = 'бетон';
      break;
    case 'Grunt':
      responseName = 'грунт';
      break;
    case 'Derevo':
      responseName = 'дерево';
      break;
    case 'Kirpich':
      responseName = 'кирпич';
      break;
    default:
      responseName = 'неизвестный материал';
  }
  const avgConv = Math.round(Number(avg) * 100);
  const result = `С вероятностью ${avgConv}% в кузове находится ${responseName}.`;
  return (
    <div
      className={`${itemStyles} w-full flex flex-row p-4 gap-6 rounded-2xl items-start`}
    >
      <div className="w-[6%]">{statusIcon}</div>
      <h5 className="w-[35%] font-normal dark:text-white opacity-70 break-words">
        {fileName}
      </h5>
      {type !== '' ? (
        <h5 className="w-[45%] dark:text-white">{result}</h5>
      ) : (
        <h5 className="w-[45%] font-normal italic dark:text-white opacity-50">Ожидание ответа...</h5>
      )}
    </div>
  );
};

export default VideoItem;
