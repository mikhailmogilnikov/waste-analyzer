import { NavLink } from 'react-router-dom';
import '../../styles/home.scss';
import Advantages from './Advantages';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="big-letters-wrapper">
        <h2 className="big-letters">
          Cистема распознавания скан-образа документов на корректность
          оформления.
        </h2>
      </div>

      <div className="button-wrapper">
        <NavLink to={'/presentation'} className="button select-zoom">
          <p>О проекте</p>
        </NavLink>
        <NavLink to={'/graph'} className="button premier-button select-zoom">
          <p>Сканировать документ</p>
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
        <NavLink to={'/graph'} className="button premier-button select-zoom">
          <p>Сканировать документ</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
