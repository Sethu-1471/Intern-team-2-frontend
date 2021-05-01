import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function AssignmentDialogBox(props) {
  const [open, setOpen] = useState(props.handleShow);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

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
      type,
    };
    props.handleDialog(true, payload, 3); //1 represents the video dialog
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Assignment</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Enter your course submodule name 
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Assignment Name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="video-tutorial-Description"
            label="Assignment Description"
            fullWidth
            multiline
            rows={5}
            onChange={(e) => setDesc(e.target.value)}
          />
          <FormControl component="fieldset" style={{ marginTop: 20 }}>
            <FormLabel component="legend">Type of Assignment</FormLabel>
            <RadioGroup
              aria-label="type of assignment"
              name="type"
              value={type}
              onChange={handleChangeType}
            >
              <FormControlLabel
                value="Video"
                control={<Radio />}
                label="Video"
              />
              <FormControlLabel
                value="Photo"
                control={<Radio />}
                label="Photo"
              />
              <FormControlLabel
                value="Document"
                control={<Radio />}
                label="Document"
              />
            </RadioGroup>
          </FormControl>
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
