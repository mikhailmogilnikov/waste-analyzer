import { NavLink } from 'react-router-dom';
import '../../styles/home.scss';
import Advantages from './Advantages';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="big-letters-wrapper">
        <h2 className="big-letters">
          Cистема распознавания видов перевозимых отходов строительства.
        </h2>
      </div>

      <div className="button-wrapper">
        <NavLink to={'/presentation'} className="button select-zoom">
          <p>О проекте</p>
        </NavLink>
        <NavLink to={'/action'} className="button premier-button select-zoom">
          <p>Начать работу</p>
        </NavLink>
      </div>

      <div className="mid-text-wrapper">
        <h2>Преимущества.</h2>
      </div>

      <Advantages />

      <div className="mid-text-wrapper">
        <h2>Начать работу.</h2>
      </div>

      <div className="button-wrapper" style={{ marginBottom: '8em' }}>
        <NavLink to={'/presentation'} className="button select-zoom">
          <p>О проекте</p>
        </NavLink>
        <NavLink to={'/action'} className="button premier-button select-zoom">
          <p>Анализ видео</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
