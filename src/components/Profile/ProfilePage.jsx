import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@material-ui/core";
import Dialog from "./ChangePassword";
import "./ProfilePage.css";
import { useHistory } from "react-router";
import { changePassword } from "../../api";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const history = useHistory();
  const [detail, setDetail] = useState([]);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    const userDetail = JSON.parse(localStorage.getItem("user"));
    if (!userDetail || !localStorage.getItem("jwt")) {
      history.push("/login");
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

  const handleDialog = (payload) => {
    if (payload) {
      changePassword(payload).then((res) => {
        if (res.data.status) {
          toast(res.data.message);
          setDialog(false);
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      setDialog(false);
    }
  };

  return (
    <div>
      <Dialog handleDialog={handleDialog} handleShow={dialog} />
      <div className="profile-container">
        <div className="profile-picture">
          <i className="fas fa-user-circle"></i>
        </div>
        <TableBody>
          {detail.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                <h6 className="profile-title">{row.title}</h6>
              </TableCell>
              <TableCell align="right">
                <span className="profile-content">{row.content}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Button
          variant="contained"
          onClick={() => setDialog(true)}
          color="primary"
          style={{ marginTop: 20 }}
        >
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
