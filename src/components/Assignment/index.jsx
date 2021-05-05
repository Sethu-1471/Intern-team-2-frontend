import React, { useState, useEffect } from "react";
import { getCoursebyId } from "../../api";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import SubModule from "./SubModules";
import SplitPane, { Pane } from "react-split-pane";
import { getAllAssignment, reviewAssignment } from "../../api";
import "../CourseCreate/splitpane.css";
import ListStudent from "./ListStudent";

export default function MainPageTwo() {
  const history = useHistory();
  let { id } = useParams();
  const [assignment, setAssignment] = useState();
  const [course, setCourse] = useState();
  const [user, setUser] = useState();

  const initialCall = () => {
    getCoursebyId(id).then((res) => {
      console.log(res.data);
      if (res.data.status) {
        setCourse(res.data.course);
      } else {
        toast(res.data.message);
      }
    });
    getAllAssignment(id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        setAssignment(res.data.assign);
        console.log(res.data);
      } else {
        toast.error(res.data.message);
      }
    });
  };
  useEffect(() => {
    initialCall();
  }, []);

  const handleUser = (e) => {
    setUser(e);
  };

  const handleReviewSubmit = (payload, module_id) => {
    reviewAssignment(payload, id, module_id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        initialCall();
      } else {
        toast.error(res.data.message);
      }
    });
  };

  if (!assignment) return null;
  return (
    <div>
      <SplitPane split="vertical" minSize="40%">
        <ListStudent student={course.userEnrolled} handleUser={handleUser} />
        {user ? (
          <SubModule
            assignment={assignment}
            userId={user}
            review={handleReviewSubmit}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
            }}
          >
            Click Any user to see their assignment works
          </div>
        )}
      </SplitPane>
    </div>
  );
}
