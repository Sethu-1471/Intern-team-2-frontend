import React from "react";
import "./ActionsContainer.css";

const ActionsContainer = () => {
    return (
        <div className="actions-container">
            <h3>
                <i class="fas fa-upload"></i> Upload Videos
            </h3>
            <p>Upload The learning videos</p>
            <div className="btn btn-primary">Upload</div>
        </div>
    );
};

export default ActionsContainer;
