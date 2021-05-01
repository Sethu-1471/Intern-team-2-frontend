import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DocumentDialogBox(props) {
  const [open, setOpen] = useState(props.handleShow);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    setOpen(props.handleShow);
  }, [props.handleShow]);

  const handleClose = () => {
    props.handleDialog();
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    props.handleDialog(true, formData, 2); //1 represents the video dialog
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Upload Document Tutorial
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Document Tutorial Name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="application/pdf,.doc,.docx"
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
