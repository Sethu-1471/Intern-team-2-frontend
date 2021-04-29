import ActionsContainer from "./ActionsContainer/ActionsContainer";
import StatisticsSection from "./StatisticsSection/StatisticsSection";

import "./Admin.css";
import StudentsSubmission from "./StudentsSubmission/StudentsSubmission";

const Admin = () => {
    return (
        <div className="admin-container py-4">
            <StatisticsSection />
            <StudentsSubmission />
            <ActionsContainer />
        </div>
    );
};

export default Admin;
