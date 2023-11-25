import { Button } from '@nextui-org/button';
import { motion, AnimatePresence } from 'framer-motion';
import TableBody from './TableBody.jsx';
import TableHead from './TableHead.jsx';
import { csvClassesDownloader } from '../../../scripts/csvDownloader.js';

const Table = ({ state, response, files, clear }) => (
  <AnimatePresence>
    {state && (
      <div className="w-full flex flex-col gap-4 mt-4">
        <motion.div
          initial={{ transform: 'translateY(20rem)', opacity: 0 }}
          animate={{ transform: 'translateY(0rem)', opacity: 1 }}
          exit={{ transform: 'translateY(20rem)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 140,
            damping: 19,
          }}
          className="w-full flex flex-col gap-4 dark:bg-white/10 border-1 border-black/10 rounded-3xl p-6 shadow-large shadow-black/40"
        >
          <TableHead />
          <TableBody state={state} response={response} files={files} />
        </motion.div>
        <motion.div
          initial={{ transform: 'translateY(16rem)', opacity: 0 }}
          animate={{ transform: 'translateY(0rem)', opacity: 1 }}
          exit={{ transform: 'translateY(16rem)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 15,
          }}
          className="flex flex-row gap-4"
        >
          <Button className="font-medium" variant="flat" onClick={clear}>
            Отмена
          </Button>
          {state === 2 && 
          <motion.div  
          initial={{ transform: 'translateY(1.5rem)', opacity: 0 }}
          animate={{ transform: 'translateY(0rem)', opacity: 1 }}
          exit={{ transform: 'translateY(1.5rem)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15,
          }} className='w-min'>
            <Button className="font-medium text-green-950" color="success" onClick={() => csvClassesDownloader(response)}>
              Экспорт в .csv
            </Button>
            </motion.div>}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
export default Table;
