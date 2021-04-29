import React from "react";
import { Link } from "react-router-dom";

import "./StudentsSubmission.css";

const StudentsSubmission = () => {
    return (
        <div className="submit-card d-flex p-3 justify-content-between align-items-center">
            <div>
                <p>Robert G</p>
                <Link to="/admin/video">View work</Link>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div
                    className="rounded-icon-sm mr-3"
                    style={{ backgroundColor: "green" }}
                    title="accept"
                >
                    <i class="fas fa-check"></i>
                </div>
                <div
                    className="rounded-icon-sm"
                    style={{ backgroundColor: "red" }}
                    title="decline"
                >
                    <i class="fas fa-times"></i>
                </div>
            </div>
        </div>
    );
};

export default StudentsSubmission;
