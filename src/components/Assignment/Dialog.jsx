import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DocumentDialogBox(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(props.handleShow);
  const [content, setContent] = useState(props.content);
  const [complete, setCompleted] = useState(false);
  const [review, setReview] = useState();
  const [mark, setMark] = useState(0);

  useEffect(() => {
    setOpen(props.handleShow);
  }, [props.handleShow]);

  useEffect(() => {
    setContent(props.content);
    setMark(props.content.mark);
    setReview(props.content.remark);
    setCompleted(props.content.completed);
  }, [props.content]);

  const handleClose = () => {
    props.handleDialog();
  };

  const handleSubmit = () => {
    if (!review) {
      toast("Some field are unfiled");
    } else {
      let payload = {
        remark: review,
        completed: complete,
        mark: mark,
      };
      props.handleDialog(payload, content._id);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Submit Assignment {content ? "- Already Submitted" : ""}
          {content ? (
            <>
              <br />
              Mark - {content.mark}
            </>
          ) : (
            ""
          )}
        </DialogTitle>
        <DialogContent>
          <p>
            You can review student assignment file. If you satisfy with it you
            can mark it as completed or you can add review
          </p>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          {content && (
            <p>Student Submission Count: {content.studentSubmissionCount}</p>
          )}
          <p>
            Last student submission time:{" "}
            {new Date(parseInt(content.studentSubmitTime)).toLocaleString()}{" "}
          </p>
          <p>
            Last Review time by you:{" "}
            {content.staffReviewTime
              ? new Date(parseInt(content.staffReviewTime)).toLocaleString()
              : "not reviewed"}{" "}
          </p>
          <TextField
            value={content.name}
            disabled
            margin="dense"
            id="name"
            label="Assignment Question ?"
            fullWidth
          />
          <TextField
            value={content.description}
            disabled
            margin="dense"
            id="description"
            label="Description"
            fullWidth
          />
          <p>{content.type}Format</p>
          <p>
            Click here to see student submission file :
            <a
              target="_blank"
              href={`${window.hostname}/${
                content.type === "Video"
                  ? "video"
                  : content.type === "Photo"
                  ? "images"
                  : "docs"
              }/${content.file}`}
            >
              {" "}
              {`${content.file}`}
            </a>{" "}
          </p>

          {content && (
            <TextField
              value={review}
              margin="dense"
              id="review"
              label="Staff Review"
              fullWidth
              placeholder="Your review"
              onChange={(event) => setReview(event.target.value)}
            />
          )}
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Mark</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mark}
              onChange={(event) => setMark(event.target.value)}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={complete}
                  onChange={() => setCompleted(!complete)}
                  name="complete"
                />
              }
              label="Mark it as completed"
            />
          </FormGroup>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={content ? content.completed : false}
          >
            {content
              ? content.completed
                ? "you it as completed"
                : "review"
              : "review"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
