import { GithubLogo } from '@phosphor-icons/react';
import AdvantageCard from './AdvantageCard';
import { NavLink } from 'react-router-dom';

const Advantages = () => {
  return (
    <div className="grid-3-wrapper">
      <AdvantageCard
        icon="App"
        name="Скорость"
        desc="Оптимизированные алгоритмы обработки видео сокращают ожидание ответа."
      />
      <AdvantageCard
        icon="Chartline"
        name="Мультиобработка"
        desc="Возможность анализа любого количества файлов одним действием."
      />
      <AdvantageCard
        icon="Paperclip"
        name="Интеграция"
        desc="Собственное API для встраивания решения в любую инфраструктуру."
      />
      <AdvantageCard
        name="Многоформатность"
        desc="Возможность работы с различными форматами видеофайлов."
      />
      <AdvantageCard
        name="Экспорт"
        desc="Опция вывода результатов обработки в .csv-файл."
      />
      <NavLink
        to="https://github.com/Sereneum/waste-analyzer-server"
        target="_blank"
        className="card-wrapper large"
        style={{ boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)' }}
      >
        <div className="card-text-wrapper" style={{ padding: '1.5em' }}>
          <h2>Посмотреть решение на GitHub</h2>
          <GithubLogo weight="fill" className="icon-git-large" />
        </div>
      </NavLink>
    </div>
  );
};

export default Advantages;
