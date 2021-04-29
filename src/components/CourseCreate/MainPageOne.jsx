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
import { useHistory } from "react-router-dom";

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
}));

export default function MainPageOne() {
  const [picture, setPicture] = useState("");
  const [register, setRegister] = useState("true");
  const [certificate, setCertificate] = useState("true");
  const [availability, setAvailability] = useState("true");
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  let history = useHistory();
  const classes = useStyles();

  const handleChangeRegister = (event) => {
    setRegister(event.target.value);
  };

  const handleChangeCertificate = (event) => {
    setCertificate(event.target.value);
  };

  const handleChangeAvailability = (event) => {
    setAvailability(event.target.value);
    console.log(event.target.value);
  };

  const handleCreateCourse = () => {
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
  };

  const onDrop = (pic) => {
    setPicture(pic);
    console.log(pic[0]);
  };

  // console.log({courseName, courseDesc});
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6} className={classes.grid}>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            withPreview={true}
            singleImage={true}
          />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <TextField
            id="Course-Name"
            label="Course Name"
            className={classes.textField}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <TextField
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
              value={register}
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
              value={certificate}
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
              value={availability}
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
          <Button
            variant="contained"
            style={{ backgroundColor: "red", color: "white", marginRight: 20 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#0081CB", color: "white" }}
            onClick={handleCreateCourse}
          >
            Continue and procced
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
