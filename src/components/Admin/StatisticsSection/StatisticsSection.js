import { useEffect, useState } from "react";

import Card from "../Card/Card";

import "./StatisticsSection.css";

const StatisticsSection = () => {
    const [contents, setContent] = useState([]);

    useEffect(() => {
        getStatistics();
    }, []);

    const getStatistics = () => {
        const contents = [
            {
                key: 0,
                title: "Registered Users",
                count: "1000",
                icon: "fa-users",
                color: "#ff9800",
            },
            {
                key: 1,
                title: "Current Users",
                count: "400",
                icon: "fa-eye",
                color: "#2196F3",
            },
            {
                key: 2,
                title: "Assessments",
                count: "300",
                icon: "fa-pencil-alt",
                color: "#009688",
            },
            {
                key: 3,
                title: "Queries",
                count: "10",
                icon: "fa-comment",
                color: "#f44336",
            },
        ];
        setContent(contents);
    };

    return (
        <div className="statistics-container">
            {contents.map((content) => (
                <Card {...content} />
            ))}
        </div>
    );
};

export default StatisticsSection;
