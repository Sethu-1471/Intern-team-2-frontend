import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function VideoDialogBox(props) {
  const [open, setOpen] = useState(props.handleShow);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setOpen(props.handleShow);
  }, [props.handleShow]);

  const handleClose = () => {
    props.handleDialog();
  };

  const handleSubmit = () => {
    let payload = {
      name,
      desc,
      link,
    };
    props.handleDialog(true, payload, 1); //1 represents the video dialog
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Upload Video Tutorial</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Video Tutorial Name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="video-tutorial-Description"
            label="Video Tutorial Description"
            fullWidth
            multiline
            rows={5}
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            margin="dense"
            id="youtube link"
            label="Youtube Link"
            fullWidth
            onChange={(e) => setLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
