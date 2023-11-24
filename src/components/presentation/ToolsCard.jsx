const ToolsCard = ({ name, desc, img }) => {
    return (
        <div
            className="card-wrapper"
            style={{
                boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
            }}
        >
            {img && <img src={img} alt={name} className="tools-img" />}
            <div className="card-text-wrapper" style={{ padding: '1.5em' }}>
                <h2>{name}</h2>
                <p className="low-opacity">{desc}</p>
            </div>
        </div>
    );
};

export default ToolsCard;
