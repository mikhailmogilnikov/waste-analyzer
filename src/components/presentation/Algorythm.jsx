import AlgoItem from './AlgoItem'

const Algorythm = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Алгоритм</h2>

			<div className='algo-wrapper'>
				<AlgoItem
					num='1'
					name='Отправка видео'
					desc='Прикрепляем файлы на сайт для дальнейшего анализа.'
				/>
				<AlgoItem
					num='2'
					name='Предварительная обработка'
					desc='Обрезка необходимого промежутка времени.'
				/>
				<AlgoItem
					num='3'
					name='Анализ изображений'
					desc='Определение типа отходов при помощи нейросети.'
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
