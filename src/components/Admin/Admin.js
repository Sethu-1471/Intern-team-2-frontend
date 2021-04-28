import Card from "./Card/Card";
import ActionsContainer from "./ActionsContainer/ActionsContainer";

import "./Admin.css";

const Admin = () => {
    return (
        <div className=" py-4">
            <div className="statistics-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <ActionsContainer />
            </div>
        </div>
    );
};

export default Admin;
