import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";

export default function VideoDialogBox(props) {
  const [open, setOpen] = useState(props.handleShow);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    setOpen(props.handleShow);
  }, [props.handleShow]);

  const handleClose = () => {
    props.handleDialog();
  };

  const handleSubmit = () => {
    if (password === confirmPassword && confirmPassword) {
      let payload = {
        password,
      };
      props.handleDialog(payload);
    } else {
      toast.error("Passowrd Not match");
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Password</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            id="confirmPassowrd"
            label="Confirm New Password"
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
