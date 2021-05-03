import { useEffect, useState } from "react";
import { HttpRequest } from "../../../api/HttpRequest";

import "./StatisticsSection.css";

const StatisticsSection = () => {
    const [statistics, setStatistics] = useState({
        total_students: 0,
        registered_students: 0,
        submissions: 0,
    });

    useEffect(() => {
        getStatisticsRequest();
    }, []);

    const getStatisticsRequest = async () => {
        const requestObj = {
            path: "/admin/analytics",
            method: "GET",
        };
        const response = await HttpRequest(requestObj);
        if (response.status === true) setStatistics(response["data"]);
    };

    return (
        <div className="statistics-container">
            <div className="card-container container-fluid p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>Total Courses</h5>
                        <h3>{statistics["totalCourses"]}</h3>
                    </div>
                    <div
                        className="round-icon"
                        style={{ backgroundColor: "#ff9800" }}
                    >
                        <i className={`fas fa-book text-white`}></i>
                    </div>
                </div>
            </div>
            <div className="card-container container-fluid p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>Available Courses</h5>
                        <h3>{statistics["availableCourses"]}</h3>
                    </div>
                    <div
                        className="round-icon"
                        style={{ backgroundColor: "#2196F3" }}
                    >
                        <i className={`fas fa-eye text-white`}></i>
                    </div>
                </div>
            </div>
            <div className="card-container container-fluid p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>Registered Students</h5>
                        <h3>{statistics["registeredStudents"]}</h3>
                    </div>
                    <div
                        className="round-icon"
                        style={{ backgroundColor: "#009688" }}
                    >
                        <i className={`fas fa-book-reader text-white`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;
