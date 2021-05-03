import ActionsContainer from "./ActionsContainer/ActionsContainer";
import StatisticsSection from "./StatisticsSection/StatisticsSection";

import "./Admin.css";
import StudentsSubmission from "./StudentsSubmission/StudentsSubmission";
import UsersTable from "./UsersTable/UsersTable";

const AdminPage = () => {
    return (
        <div className="admin-container py-4">
            <StatisticsSection />
            <UsersTable />
        </div>
    );
};

export default AdminPage;
