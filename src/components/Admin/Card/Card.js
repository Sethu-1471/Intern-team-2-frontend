import "./Card.css";

const Card = ({ title, count, icon, color }) => {
    return (
        <div className="card-container container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h3>{count}</h3>
                </div>
                <div className="round-icon" style={{ backgroundColor: color }}>
                    <i className={`fas ${icon} text-white`}></i>
                </div>
            </div>
        </div>
    );
};

export default Card;
