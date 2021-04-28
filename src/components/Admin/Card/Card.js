import "./Card.css";

const Card = () => {
    return (
        <div className="card-container container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>Registered Students</h5>
                    <h3>1000</h3>
                </div>
                <div className="round-icon">
                    <i class="fas fa-users"></i>
                </div>
            </div>
        </div>
    );
};

export default Card;
