import TableBody from './table/TableBody.jsx';
import TableHead from './table/TableHead.jsx';

const Analyze = () => {
  return (
    <div className="presentation-wrapper">
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-left w-full text-3xl">Обработка видеофайлов</h1>
        <div className="w-full flex flex-col gap-4 dark:bg-white/10 border-1 border-black/10 rounded-3xl p-6 shadow-large shadow-black/40">
          <TableHead />
          <TableBody />
        </div>
      </div>
    </div>
  );
};

export default Analyze;
