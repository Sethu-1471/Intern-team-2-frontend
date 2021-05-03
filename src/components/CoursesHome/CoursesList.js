import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  getCourseByUserId,
  getAllPublicCourse,
  deleteCourse,
  getUser,
} from "../../api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 265,
  },
  media: {
    height: 140,
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
});

function CourseCard({ content, admin, deleteCourseHandle, user }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${window.hostname}/images/${content.image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {admin ? (
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => history.push("/editsubcontent/" + content._id)}
          >
            Edit Course
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              if (
                window.confirm(
                  "Delete Course reflect to registered user also, continue to delete ?"
                )
              ) {
                deleteCourseHandle(content._id);
              }
            }}
          >
            Delete
          </Button>
        </CardActions>
      ) : (
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => history.push("/payment/" + content._id)}
            disabled={content.userEnrolled.find((o) => o.user === user._id)}
          >
            {content.userEnrolled.find((o) => o.user === user._id)
              ? "Already Enrolled"
              : "Enroll"}
          </Button>
          <Button size="small" color="primary" disabled>
            {content.registration ? "free" : "cost"}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default function CoursesList() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState();

  const getCourse = () => {
    if (localStorage.getItem("isAdmin") === "true") {
      setAdmin(true);
      getCourseByUserId(localStorage.getItem("jwt")).then((res) => {
        if (res.data.status) {
          // toast(res.data.message);
          setCourses(res.data.course);
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      setAdmin(false);
      getAllPublicCourse(localStorage.getItem("jwt")).then((res) => {
        if (res.data.status) {
          // toast(res.data.message);
          setCourses(res.data.course);
        } else {
          toast.error(res.data.message);
        }
      });
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getCourse();
  }, []);

  const deleteCourseHandle = async (id) => {
    deleteCourse(id).then((res) => {
      if (res.data.status) {
        toast(res.data.message);
        getCourse();
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <div>
      <div className={classes.header}>
        <h4>{admin ? "My Course" : "Course for you..!"}</h4>
        {admin && <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/admin/dashboard")}
        >
          Dashboard
        </Button>}
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            admin ? history.push("/addcourse") : history.push("/mycourse")
          }
        >
          {admin ? "add course" : "Explore my course"}
        </Button>
      </div>

      {courses[0] ? (
        <div className="row m-0">
          {courses.map((d, i) => (
            <div
              key={i}
              className="col-12 col-md-4 mt-5 d-flex justify-content-center"
            >
              <CourseCard
                content={d}
                admin={admin}
                user={user}
                deleteCourseHandle={deleteCourseHandle}
              />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ margin: "20px 20px" }}>
          <h4>
            {admin ? "You not created any course" : "No Course Available"}
          </h4>
          {admin && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/addcourse")}
            >
              Create Course
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
