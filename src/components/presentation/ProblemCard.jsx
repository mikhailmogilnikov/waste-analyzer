import { ClockCountdown, Hand, Bank } from '@phosphor-icons/react';

const ProblemCard = ({ icon, name, desc }) => {
  let iconComponent;
  if (icon === 'Warning') {
    iconComponent = <Bank className="icon-card" />;
  } else if (icon === 'Graph') {
    iconComponent = <ClockCountdown className="icon-card" />;
  } else if (icon === 'CurrencyRub') {
    iconComponent = <Hand className="icon-card" />;
  } else {
    iconComponent = null;
  }

  return (
    <div className="card-wrapper">
      <div className="card-head">{iconComponent}</div>
      <div className="card-text-wrapper">
        <h2>{name}</h2>
        <p className="low-opacity">{desc}</p>
      </div>
    </div>
  );
};

export default ProblemCard;
