import { GearFine, ListPlus, WebhooksLogo } from '@phosphor-icons/react'

const Scale = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Масштабируемость</h2>
			<div className='scale-wrapper'>
				<div className='scale-item'>
					<WebhooksLogo weight='bold' className='icon-big' />
					<p>
						Доработка API корпоративного сервера, на который будут отправляться файлы.
					</p>
				</div>

				<div className='scale-item'>
					<GearFine weight='bold' className='icon-big' />
					<p>
						Оптимизация архитектуры нейросети для ускорения обработки и
						возможности работать на менее мощном оборудовании.
					</p>
				</div>

				<div className='scale-item'>
					<ListPlus weight='bold' className='icon-big' />
					<p>
						Добавление новых типов отходов.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Scale
