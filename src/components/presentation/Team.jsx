import vanya from '/assets/images/ivan.jpg';
import max from '/assets/images/max.jpg';
import misha from '/assets/images/misha.jpg';
import Person from './Person';

const Team = () => {
  return (
    <div className="wrapper">
      <h2 className="text-mini-title">Команда</h2>
      <div className="team-wrapper">
        <Person name={'Иван Дьяконов'} role={'ML Engineer'} img={vanya} />

        <Person
          name={'Максим Романов'}
          role={'Fullstack Developer'}
          img={max}
        />

        <Person
          name={'Михаил Могильников'}
          role={'Frontend Developer'}
          img={misha}
        />
      </div>
      <div className="wrapper" style={{ gap: '30px' }}>
        <h1>&quot;space&quot;</h1>
        <h5 className="low-opacity">
          Состав молодых и амбициозных разработчиков, движимых желанием
          создавать.
        </h5>
      </div>
    </div>
  );
};

export default Team;
