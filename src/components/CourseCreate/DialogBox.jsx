import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DialogBox(props) {
  const [open, setOpen] = useState(props.handleShow);

  useEffect(() => {
    setOpen(props.handleShow);
  }, [props.handleShow]);

  const handleClose = () => {
    props.handleDialog();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Sub Module Name</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Sub Module Name"
            fullWidth
            onChange={(e) => props.handleNameChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => props.handleDialog(true)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
