import { GithubLogo } from '@phosphor-icons/react';
import AdvantageCard from './AdvantageCard';
import { NavLink } from 'react-router-dom';

const Advantages = () => {
    return (
        <div className="grid-3-wrapper">
            <AdvantageCard
                icon={'App'}
                name={'Приватность'}
                desc={
                    'Анализ документов происходит без риска утечек благодаря локальной языковой модели.'
                }
            />
            <AdvantageCard
                icon={'Chartline'}
                name={'Технологичность'}
                desc={
                    'Использование передовых фреймворков для оптимизации решения.'
                }
            />
            <AdvantageCard
                icon={'Paperclip'}
                name={'Доступность'}
                desc={
                    'Возможность проверки актов прямо на сайте с любого устройства.'
                }
            />
            <AdvantageCard
                name={'Оптимизация'}
                desc={
                    'Разгрузка нейросети при помощи средств Python.'
                }
            />
            {/* <AdvantageCard
                name={'Легкость'}
                desc={'Интуитивно понятный интерфейс для любого пользователя.'}
            /> */}
            <AdvantageCard
                name={'Автоматизация'}
                desc={
                    'Нейросеть сама определяет подходящий тип акта перед проверкой.'
                }
            />
            <NavLink
				to={'https://github.com/Sereneum/text-analyzer-server'}
				target='_blank'
				className='card-wrapper large'
				style={{ boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)' }}
			>
				<div className='card-text-wrapper' style={{ padding: '1.5em' }}>
					<h2>Посмотреть решение на GitHub</h2>
					<GithubLogo weight='fill' className='icon-git-large' />
				</div>
			</NavLink>
        </div>
    );
};

export default Advantages;
