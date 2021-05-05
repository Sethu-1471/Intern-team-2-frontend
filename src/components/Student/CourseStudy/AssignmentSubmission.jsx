import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";

export default function DocumentDialogBox(props) {
  const [open, setOpen] = useState(props.handleShow);
  const [file, setFile] = useState();

  useEffect(() => {
    setOpen(props.handleShow);
  }, [props.handleShow]);

  const handleClose = () => {
    props.handleDialog();
  };

  const handleSubmit = () => {
    if (props.submittedAssignment) {
      if (file) {
        props.handleUpdateAssignment(file);
      } else {
        toast.error("File is required");
      }
    } else {
      if (file) {
        props.handleSubmit(file);
      } else {
        toast.error("File is required");
      }
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
          Submit Assignment{" "}
          {props.submittedAssignment ? "- Already Submitted" : ""}
          {props.submittedAssignment ? (
            <>
              <br />
              Mark - {props.submittedAssignment.mark}
            </>
          ) : (
            ""
          )}
        </DialogTitle>
        <DialogContent>
          <p>
            You can resubmit your assignment file until staff mark it as
            completed. Staff may be add review every time after your submission.
          </p>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          {props.submittedAssignment && (
            <p>
              Your Submission Count:{" "}
              {props.submittedAssignment.studentSubmissionCount}
            </p>
          )}

          {props.submittedAssignment && (
            <div>
              <p>
                Last student submission time:{" "}
                {new Date(
                  parseInt(props.submittedAssignment.studentSubmitTime)
                ).toLocaleString()}{" "}
              </p>
              <p>
                Last Staff review:{" "}
                {props.submittedAssignment.staffReviewTime
                  ? new Date(
                      parseInt(props.submittedAssignment.staffReviewTime)
                    ).toLocaleString()
                  : "Till Not reviewed"}{" "}
              </p>
            </div>
          )}
          <TextField
            value={
              props.submittedAssignment
                ? props.submittedAssignment.name
                : props.assignment.name
            }
            disabled
            margin="dense"
            id="name"
            label="Assignment Question ?"
            fullWidth
          />
          <TextField
            value={
              props.submittedAssignment
                ? props.submittedAssignment.description
                : props.assignment.description
            }
            disabled
            margin="dense"
            id="description"
            label="Description"
            fullWidth
          />
          {props.submittedAssignment ? (
            props.submittedAssignment.completed ? (
              'Staff Mark it as Completed. So you can"t submit assignment'
            ) : (
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept={
                  props.assignment.type === "Video"
                    ? "video/*"
                    : props.assignment.type === "Document"
                    ? "application/pdf,.doc,.docx"
                    : "image/*"
                }
              />
            )
          ) : (
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept={
                props.assignment.type === "Video"
                  ? "video/*"
                  : props.assignment.type === "Document"
                  ? "application/pdf,.doc,.docx"
                  : "image/*"
              }
            />
          )}
          <p>
            {props.assignment.type === "Video"
              ? "Video Format"
              : props.assignment.type === "Document"
              ? "Document Format"
              : "Photo Format"}
            {props.assignment.type}
          </p>
          {props.submittedAssignment && (
            <p>
              Your last submission:
              <a
                target="_blank"
                href={`${window.hostname}/${
                  props.submittedAssignment.type === "Video"
                    ? "video"
                    : props.submittedAssignment.type === "Photo"
                    ? "images"
                    : "docs"
                }/${props.submittedAssignment.file}`}
              >{`${props.submittedAssignment.file}`}</a>{" "}
            </p>
          )}
          {props.submittedAssignment && (
            <TextField
              value={
                props.submittedAssignment.remark
                  ? props.submittedAssignment.remark
                  : 'Staff didn"t write any review'
              }
              disabled
              margin="dense"
              id="review"
              label="Staff Review"
              fullWidth
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={
              props.submittedAssignment
                ? props.submittedAssignment.completed
                : false
            }
          >
            {props.submittedAssignment
              ? props.submittedAssignment.completed
                ? " Staff mark it as completed"
                : "ReSubmit"
              : "upload"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
