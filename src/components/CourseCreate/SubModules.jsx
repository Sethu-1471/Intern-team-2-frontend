import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import VideoTutorialDialog from "./VideoDialogBox.jsx";
import DocumentTutorialDialog from "./DocumentDialogBox";
import AssignmentDialog from "./AssignmentDialogBox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Movie, Description, Assignment } from "@material-ui/icons";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },

  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState("panel0");
  const [content, setContent] = useState(props.content);
  const [videoTutorialDialog, setVideoTutorialDialog] = useState(false);
  const [documentTutorialDialog, setDocumentTutorialDialog] = useState(false);
  const [assignmentDialog, setAssignmentDialog] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(
    props.content[0] ? props.content[0]._id : ""
  );

  useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  const handleChange = (panel, id) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setExpandedIndex(id);
  };

  const videoTutorialDialoghandle = () => {
    setVideoTutorialDialog(true);
  };
  const documentTutorialDialoghandle = () => {
    setDocumentTutorialDialog(true);
  };

  const AssignmentDialogHandle = () => {
    setAssignmentDialog(true);
  };

  const handleDialog = (e = false, payload, identification) => {
    if (e) {
      if (identification === 1) {
        //Response Video Dialog
        props.uploadVideoTutorial(payload, expandedIndex);
        setVideoTutorialDialog(false);
      } else if (identification === 2) {
        //Response Document Dialog
        props.uploadDocsTutorial(payload, expandedIndex);
        setDocumentTutorialDialog(false);
      } else if (identification === 3) {
        //Response Assignment Dialog
        props.uploadAssignment(payload, expandedIndex);
        setAssignmentDialog(false);
      }
    } else {
      setVideoTutorialDialog(false);
      setDocumentTutorialDialog(false);
      setAssignmentDialog(false);
    }
  };
  return (
    <div>
      <VideoTutorialDialog
        handleShow={videoTutorialDialog}
        handleDialog={handleDialog}
      />
      <DocumentTutorialDialog
        handleShow={documentTutorialDialog}
        handleDialog={handleDialog}
      />
      <AssignmentDialog
        handleShow={assignmentDialog}
        handleDialog={handleDialog}
      />
      {content.map((con, i) => (
        <Accordion
          square
          expanded={expanded === `panel${i}`}
          id={i}
          onChange={handleChange(`panel${i}`, con._id)}
        >
          <AccordionSummary aria-controls="panel1d-content">
            <Typography>
              {" "}
              {con.name} #{i + 1},{" "}
              <small> {con.content.length} contents </small>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails id={`panel${i}-content`}>
            <div>
              <List dense={false}>
                {con.content.map((i, j) => (
                  <ListItem onClick={() => console.log(i.contentId)} button>
                    <ListItemIcon>
                      {i.reference == "Video" ? (
                        <Movie />
                      ) : i.reference == "Document" ? (
                        <Description />
                      ) : (
                        <Assignment />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={`${i.contentName}`} />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={videoTutorialDialoghandle}
              >
                Add Video
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{ margin: "0 5px" }}
                onClick={documentTutorialDialoghandle}
              >
                Add Document
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={AssignmentDialogHandle}
              >
                Add Assignment
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
