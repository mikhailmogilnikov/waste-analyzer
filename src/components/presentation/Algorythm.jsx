import AlgoItem from './AlgoItem'

const Algorythm = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Алгоритм</h2>

			<div className='algo-wrapper'>
				<AlgoItem
					num='1'
					name='Отправка документов'
					desc='Прикрепляем файл на сайт для дальнейшего анализа.'
				/>
				<AlgoItem
					num='2'
					name='Обработка файлов'
					desc='Преобразование документов в формат, необходимый для работы нейросети.'
				/>
				<AlgoItem
					num='3'
					name='Анализ текста'
					desc='Поиск несоответствий в заполненных актах.'
				/>
				<AlgoItem
					num='4'
					name='Получение результата'
					desc='Выводы о работе программы отправляются обратно на сайт.'
				/>
			</div>
		</div>
	)
}

export default Algorythm
