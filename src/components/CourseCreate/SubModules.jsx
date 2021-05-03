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
import {
  Movie,
  Description,
  Assignment,
  Delete,
  Edit,
} from "@material-ui/icons";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, useParams } from "react-router-dom";
import { getVideo } from "../../api";
import { toast } from "react-toastify";

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
  const history = useHistory();
  const { id } = useParams();
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

  const documentDownload = (id, cId) => {
    getVideo(id, cId, 2).then((res) => {
      if (res.data.status) {
        toast("You tutorial document downloading...!!");
        console.log(res.data.video);
        let uri = `${window.hostname}/docs/${res.data.video.file}`;
        var link = document.createElement("a");
        // If you don't know the name or want to use
        // the webserver default set name = ''
        link.setAttribute("download", "tutorial");
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        toast.error(res.data.message);
      }
    });
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
              {con.name} #{i + 1}, <small> {con.content.length} part </small>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails id={`panel${i}-content`}>
            <div>
              <List>
                {con.content.map((i, j) => (
                  <ListItem
                    onClick={() =>
                      i.reference == "Video"
                        ? history.push("/videoview/" + id + "/" + i.contentId)
                        : i.reference == "Document"
                        ? documentDownload(id, i.contentId)
                        : null
                    }
                    button
                  >
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
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          if (
                            window.confirm(
                              "This delete will reflect for registered students also, continue to delete ?"
                            )
                          ) {
                            props.deleteContent(
                              i.contentId,
                              i.reference,
                              i._id,
                              expandedIndex
                            );
                          }
                        }}
                      >
                        <Delete />
                      </IconButton>
                      {/* <IconButton edge="end" aria-label="delete" onClick={() => console.log("edit" + i._id + i.reference)}>
                      <Edit />
                    </IconButton> */}
                    </ListItemSecondaryAction>
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
