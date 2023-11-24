
const Good = ({data}) => {
  return (
    <div className="scale-wrapper" style={{ padding: '50px' }}>
    <h2>{`Тип акта: ${data.filetype}`}</h2>
    <div className="scale-item" style={{ borderColor: '#34da1e51' }}>
      <p
        style={{
          textAlign: 'center',
          width: '100%',
          color: '#34da1e',
        }}
      >
        Успешно! Файл соответствует критериям акта.
      </p>
    </div>
  </div>
  );
};

export default Good;
