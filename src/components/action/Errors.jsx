
const Errors = ({data}) => {

    const create_err = (item) => 
        <div className="scale-item" style={{ borderColor: '#da1e1e51' }}>
            <p
            style={{
                textAlign: 'center',
                width: '100%',
            }}
            >
                {item}
            </p>
      </div>
    
    
    return (
        <div className="scale-wrapper" style={{ padding: '50px' }}>
        <h2>{`Тип акта: ${data.filetype}`}</h2>
        <p
          style={{
            textAlign: 'center',
            width: '100%',
            color: '#da1e1e',
            fontSize: '16px'
          }}
        >
          Файл содержит ошибки.
        </p>

          {
            data.errors.map(
                (i, ind) => 
            <>
              <div className="scale-item" style={{ borderColor: '#da1e1e51' }}>
                    <p
                        style={{
                        textAlign: 'center',
                        width: '100%',
                        }}
                    >
                        {i}
                    </p>
                 </div>
   
            </>
            )
          }
       

      </div>
    );
  };
  
  export default Errors;
  