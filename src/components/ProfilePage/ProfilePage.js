import { useEffect, useState } from "react";
import { Box, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";

import "./ProfilePage.css";
import { useHistory } from "react-router";

const ProfilePage = () => {
    const history = useHistory();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        getUserDetail();
    }, []);

    const getUserDetail = () => {
        const userDetail = JSON.parse(localStorage.getItem("user"));
        if (!userDetail) {
            history.push("/login");
            return;
        }
        const tableList = [
            {
                title: "User name",
                content: userDetail["name"],
            },
            {
                title: "Email Address",
                content: userDetail["email"],
            },
            {
                title: "Contact Number",
                content: userDetail["contactNo"],
            },
            {
                title: "Country",
                content: userDetail["country"],
            },
            {
                title: "Date of Birth",
                content: userDetail["dob"],
            },
        ];
        setDetail(tableList);
    };

    return (
        <div className="profile-container">
            <div className="profile-picture">
                <i class="fas fa-user-circle"></i>
            </div>
            <TableBody>
                {detail.map((row) => (
                    <TableRow key={row.title}>
                        <TableCell component="th" scope="row">
                            <h6 className="profile-title">{row.title}</h6>
                        </TableCell>
                        <TableCell align="right">
                            <span className="profile-content">
                                {row.content}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </div>
    );
};

export default ProfilePage;
