import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ImageUploader from "react-images-upload";
import Button from "@material-ui/core/Button";
import { createCourse } from "../../api";
import { toast } from "react-toastify";
import axios from "axios";
import { getCoursebyId, updateCourse } from "../../api";
import { useHistory, useParams } from "react-router-dom";
import SplitPane, { Pane } from "react-split-pane";
import "./splitpane.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    minWidth: "100%",
    marginTop: 20,
  },
  grid: {
    padding: "0 20px",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    borderBottom: "1px solid grey",
    boxShadow: "0px 0.5px #B0BEC5",
  },
}));

export default function MainPageOne() {
  const [picture, setPicture] = useState(null);
  const [register, setRegister] = useState(true);
  const [certificate, setCertificate] = useState(true);
  const [availability, setAvailability] = useState(true);
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [course, setCourse] = useState();
  const [showPicture, setShowPicture] = useState(null);
  let history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const handleChangeRegister = (event) => {
    setRegister(event.target.value === "true" ? true : false);
  };

  const handleChangeCertificate = (event) => {
    setCertificate(event.target.value === "true" ? true : false);
  };

  const handleChangeAvailability = (event) => {
    setAvailability(event.target.value === "true" ? true : false);
    console.log(event.target.value === "true" ? true : false);
  };

  useState(() => {
    console.log(document.getElementsByClassName("deleteImage"));
  }, [picture]);

  useState(() => {
    if (id) {
      getCoursebyId(id).then((res) => {
        console.log(res.data.course);
        if (res.data.status) {
          setCourse(res.data.course);
          setCourseName(res.data.course.name);
          setShowPicture(res.data.course.image);
          setCourseDesc(res.data.course.description);
          setAvailability(res.data.course.availability);
          setCertificate(res.data.course.certificate);
          setRegister(res.data.course.registration);
        } else {
          toast(res.data.message);
        }
      });
    }
  }, []);

  const handleCreateCourse = () => {
    if (id) {
      if (!courseName || !courseDesc) {
        toast.error("Oops, Some Field are Unfilled");
      } else {
        if (picture) {
          console.log("Picture change");
          const formData = new FormData();
          formData.append("file", picture[0]);
          formData.append("name", courseName);
          formData.append("desc", courseDesc);
          formData.append("availability", availability);
          formData.append("registration", register);
          formData.append("certificate", certificate);
          let params = {
            withImage: true,
            course_id: id,
            orginalImage: showPicture,
          };
          updateCourse(formData, params).then((res) => {
            if (res.data.status) {
              toast(res.data.message);
              history.push(`/editsubcontent/${id}`);
            } else {
              toast.error(res.data.message);
            }
          });
        } else {
          console.log("pic unchanged");
          let payload = {
            name: courseName,
            desc: courseDesc,
            availability,
            certificate,
            registration: register,
          };
          let params = {
            withImage: false,
            course_id: id,
          };
          updateCourse(payload, params).then((res) => {
            if (res.data.status) {
              toast(res.data.message);
              history.push(`/editsubcontent/${id}`);
            } else {
              toast.error(res.data.message);
            }
          });
        }
      }
    } else {
      if (!courseName || !courseDesc || !picture) {
        toast.error("Oops, Some Field are Unfilled");
      } else {
        axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
        const formData = new FormData();
        formData.append("file", picture[0]);
        formData.append("name", courseName);
        formData.append("desc", courseDesc);
        formData.append("availability", availability);
        formData.append("registration", register);
        formData.append("certificate", certificate);
        createCourse(formData).then((res) => {
          if (res.data.status) {
            toast(res.data.message);
            history.push(`/editsubcontent/${res.data.course_id}`);
          } else {
            toast.error(res.data.message);
          }
        });
      }
    }
  };

  const onDrop = (pic) => {
    document.getElementsByClassName("deleteImage")[0].style.display = "none";
    setPicture(pic);
  };

  // console.log({courseName, courseDesc});
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h4>{id ? "Edit" : "Create"} Course</h4>
        <div>
          <Button
            variant="contained"
            style={{ backgroundColor: "red", color: "white", marginRight: 20 }}
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateCourse}
          >
            {id ? "Update" : "Continue"}
          </Button>
        </div>
      </div>
      <SplitPane split="vertical" minSize="40%">
        <div style={{ padding: "20px" }}>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            withPreview={true}
            singleImage={true}
          />
          {showPicture ? (
            !picture ? (
              <img
                src={`${window.hostname}/images/${showPicture}`}
                width="100%"
                height="300px"
                style={{ padding: "1px" }}
              />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div style={{ padding: "10px" }}>
          <TextField
            value={courseName}
            id="Course-Name"
            label="Course Name"
            className={classes.textField}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <TextField
            value={courseDesc}
            id="Course-Description"
            label="Course Description"
            className={classes.textField}
            multiline
            rows={5}
            onChange={(e) => setCourseDesc(e.target.value)}
          />
          <FormControl component="fieldset" className={classes.textField}>
            <FormLabel component="legend">Course Registration</FormLabel>
            <RadioGroup
              aria-label="course register"
              name="register"
              value={register ? "true" : "false"}
              onChange={handleChangeRegister}
            >
              <FormControlLabel value="true" control={<Radio />} label="Free" />
              <FormControlLabel
                value={"false"}
                control={<Radio />}
                label="Paid"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.textField}>
            <FormLabel component="legend">Certificate Given</FormLabel>
            <RadioGroup
              aria-label="course certificate"
              name="certificate"
              value={certificate ? "true" : "false"}
              onChange={handleChangeCertificate}
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.textField}>
            <FormLabel component="legend">Course Availability</FormLabel>
            <RadioGroup
              aria-label="course availability"
              name="availability"
              value={availability ? "true" : "false"}
              onChange={handleChangeAvailability}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Private"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </SplitPane>
    </div>
  );
}
