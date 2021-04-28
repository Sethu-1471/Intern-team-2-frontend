import ActionsContainer from "./ActionsContainer/ActionsContainer";
import StatisticsSection from "./StatisticsSection/StatisticsSection";

import "./Admin.css";

const Admin = () => {
    return (
        <div className=" py-4">
            <StatisticsSection />
            <ActionsContainer />
        </div>
    );
};

export default Admin;
