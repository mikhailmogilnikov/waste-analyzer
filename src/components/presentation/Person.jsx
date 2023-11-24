const Person = ({ img, name, role }) => {
  return (
    <div className="person-wrapper">
      <div className="avatar">
        <img src={img} alt={name}></img>
      </div>
      <div className="text-wrapper">
        <h2>{name}</h2>
        <p className="low-opacity">{role}</p>
      </div>
    </div>
  );
};

export default Person;
