import React, { useState, useEffect } from "react";
import { getCoursebyId } from "../../../api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import SubModule from "./SubMoudles";
import SplitPane, { Pane } from "react-split-pane";
import "../../CourseCreate/splitpane.css";

export default function MainPageTwo() {
  let { id } = useParams();
  const [course, setCourse] = useState();
  const [dialogShow, setDialogShow] = useState(false);
  const [modulename, setModulename] = useState();

  useEffect(() => {
    getCoursebyId(id, true).then((res) => {
      console.log(res.data);
      if (res.data.status) {
        setCourse(res.data.course);
      } else {
        toast(res.data.message);
      }
    });
  }, []);

  const handleNameChange = (e) => {
    setModulename(e);
  };


  if (!course) return null;
  return (
    <div>
      <SplitPane split="vertical" minSize="40%">
        <div style={{ padding: "20px" }}>
          <img
            src={`${window.hostname}/images/${course.image}`}
            width="100%"
            height="300px"
            style={{ padding: "1px" }}
          />
          <h4> {course.name} </h4>
          <p>Description - {course.description} </p>
          <p>
            Certificate - {course.certificate ? "Download Certificate after completion of course" : "Not Available"}
          </p>
          <p>Instructor - {course.staffId.name} </p>
          <p>Instructor email id - {course.staffId.email} </p>
          <p>You can reach him/her by mail</p>
        </div>
        <div>
          {course.subModule[0] ? (
            <SubModule
              content={course.subModule}
            />
          ) : (
            <div style={{ padding: "20px 20px" }}>
              <h5>No Sub Module Available</h5>
            </div>
          )}
        </div>
      </SplitPane>
    </div>
  );
}
