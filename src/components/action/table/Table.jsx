import TableBody from './TableBody.jsx';
import TableHead from './TableHead.jsx';

const Table = ({state, response, files}) => (
    <div className="w-full flex flex-col gap-4 dark:bg-white/10 border-1 border-black/10 rounded-3xl p-6 shadow-large shadow-black/40">
        <TableHead />
        <TableBody state={state} response={response} files={files}/>
  </div>
  )
export default Table;
