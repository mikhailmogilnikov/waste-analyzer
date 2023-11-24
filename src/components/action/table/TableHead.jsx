const TableHead = () => {
  return (
    <div className="w-full flex flex-row p-4 gap-6 rounded-2xl bg-[#efefef] dark:bg-white/10">
      <h4 className="w-[6%] font-medium dark:text-white opacity-50">Статус</h4>
      <h4 className="w-[35%] font-medium dark:text-white opacity-50">
        Имя файла
      </h4>
      <h4 className="w-[45%] font-medium dark:text-white opacity-50">
        Результат
      </h4>
    </div>
  );
};

export default TableHead;
