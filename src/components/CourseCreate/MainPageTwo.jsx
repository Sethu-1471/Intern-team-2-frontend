import React, { useState, useEffect } from "react";
import { getCoursebyId } from "../../api";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import SubModule from "./SubModules";
import DialogBox from "./DialogBox";
import SplitPane, { Pane } from "react-split-pane";
import {
  updateCourseSubModuleName,
  uploadVideoTutorial,
  uploadDocsTutorial,
  uploadAssignment,
  deleteSubModule,
} from "../../api";
import "./splitpane.css";

export default function MainPageTwo() {
  const history = useHistory();
  let { id } = useParams();
  const [course, setCourse] = useState();
  const [dialogShow, setDialogShow] = useState(false);
  const [modulename, setModulename] = useState();

  useEffect(() => {
    getCoursebyId(id).then((res) => {
      console.log(res.data);
      if (res.data.status) {
        setCourse(res.data.course);
      } else {
        toast(res.data.message);
      }
    });
  }, []);

  const handleDialog = (e = false) => {
    if (e) {
      let payload = {
        name: modulename,
      };
      updateCourseSubModuleName(payload, id).then((res) => {
        if (res.data.status) {
          toast(res.data.message);
          setCourse(res.data.course);
          setDialogShow(!dialogShow);
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      setDialogShow(!dialogShow);
    }
  };

  const handleNameChange = (e) => {
    setModulename(e);
  };

  const handleUploadVideoTutorial = (payload, module_id) => {
    uploadVideoTutorial(payload, id, module_id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        setCourse(res.data.course);
        console.log(res.data.course);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const handleUploadDocsTutorial = (payload, module_id) => {
    uploadDocsTutorial(payload, id, module_id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        setCourse(res.data.course);
        console.log(res.data.course);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const handleuploadAssignment = (payload, module_id) => {
    uploadAssignment(payload, id, module_id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        setCourse(res.data.course);
        console.log(res.data.course);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const deleteContent = (cId, Ref, mcId, mId) => {
    const typeFind = (ref) => {
      if (ref === "Document") {
        return 2;
      } else if (ref === "Video") {
        return 1;
      } else if (ref === "Assignment") {
        return 3;
      }
    };
    let params = {
      content_id: cId,
      type: typeFind(Ref),
      course_id: id,
      module_id: mId,
      moduleContentId: mcId,
    };
    deleteSubModule(params).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        setCourse(res.data.course);
        console.log(res.data.course);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  if (!course) return null;
  return (
    <div>
      <DialogBox
        handleShow={dialogShow}
        handleNameChange={handleNameChange}
        handleDialog={handleDialog}
      />
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
            Certificate - {course.certificate ? "Available" : "Not Available"}
          </p>
          <p>Availability - {course.availability ? "Public" : "Private"}</p>
          <p>Registration - {course.registration ? "Free" : "Paid"}</p>
          <p>Rating - {course.rating}/10</p>
          <p>Total registered Students: {course.userEnrolled.length} </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/editcourse/" + id)}
          >
            Edit Course Details
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            onClick={() => setDialogShow(true)}
            style={{ margin: "10px 20px" }}
          >
            Overview
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/assignment/" + id)}
          >
            Assignment Review
          </Button>
        </div>
        <div>
          {course.subModule[0] ? (
            <SubModule
              content={course.subModule}
              uploadAssignment={handleuploadAssignment}
              uploadDocsTutorial={handleUploadDocsTutorial}
              uploadVideoTutorial={handleUploadVideoTutorial}
              deleteContent={deleteContent}
            />
          ) : (
            <div style={{ padding: "20px 20px" }}>
              <h5>No Sub Module Available</h5>
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDialogShow(true)}
            style={{ margin: "20px 20px" }}
          >
            Create Sub Module
          </Button>
        </div>
      </SplitPane>
    </div>
  );
}
