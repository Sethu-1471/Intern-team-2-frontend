import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Movie,
  Description,
  Assignment,
  Image,
  Delete,
  Edit,
  ArrowLeft,
  ChevronRight,
} from "@material-ui/icons";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, useParams } from "react-router-dom";
import { getVideo } from "../../api";
import { toast } from "react-toastify";
import Dialog from "./Dialog";

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
  const [expanded, setExpanded] = React.useState("panel1");
  const [content, setContent] = useState(props.assignment);
  const [expandedIndex, setExpandedIndex] = useState();
  // props.assignment[0] ? props.content[0]._id : ""
  const [user, setUser] = useState(props.userId);
  const [dialog, setDialog] = useState(props.dialogShow);
  const [dialogContent, setDialogContent] = useState();

  useEffect(() => {
    setContent(props.assignment);
    setDialog(false);
    console.log(props.assignment);
  }, [props.assignment]);

  useEffect(() => {
    setUser(props.userId);
    console.log(props.userId);
  }, [props.userId]);

  const handleChange = (panel, id) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setExpandedIndex(id);
  };

  const handleDialog = (payload, id) => {
    console.log(payload);
    if (payload) {
      props.review(payload, id);
    } else {
      setDialog(false);
      setDialogContent();
    }
  };

  const showDialog = (e, id) => {
    console.log(e, id);
    if (e === 1) {
      content.photoAssignment.forEach((res) => {
        if (res._id == id) {
          setDialogContent(res);
          setDialog(true);
        }
      });
    } else if (e === 2) {
      content.videoAssignment.forEach((res) => {
        if (res._id == id) {
          setDialogContent(res);
          setDialog(true);
        }
      });
    } else {
      content.documentAssignment.forEach((res) => {
        if (res._id == id) {
          setDialogContent(res);
          setDialog(true);
        }
      });
    }
  };

  return (
    <div>
      {dialogContent && (
        <Dialog
          handleShow={dialog}
          handleDialog={handleDialog}
          content={dialogContent}
        />
      )}
      {content.photoAssignment && (
        <Accordion
          square
          expanded={expanded === `panel1`}
          id="panel1"
          onChange={handleChange(`panel1`)}
        >
          <AccordionSummary aria-controls="panel1d-content">
            <Typography>Photo Assignment</Typography>
          </AccordionSummary>
          <AccordionDetails id={`panel1-content`}>
            <List>
              {content.photoAssignment.map((i, j) => {
                if (user === i.student.id)
                  return (
                    <ListItem button onClick={() => showDialog(1, i._id)}>
                      <ListItemIcon>
                        <Image />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${i.name}`}
                        secondary={
                          i.completed
                            ? "You marked as completed"
                            : "Review needed"
                        }
                      />
                    </ListItem>
                  );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
      {content.videoAssignment && (
        <Accordion
          square
          expanded={expanded === `panel2`}
          id="panel2"
          onChange={handleChange(`panel2`)}
        >
          <AccordionSummary aria-controls="panel21d-content">
            <Typography>Video Assignment</Typography>
          </AccordionSummary>
          <AccordionDetails id={`panel2-content`}>
            <List>
              {content.videoAssignment.map((i, j) => {
                if (user === i.student.id)
                  return (
                    <ListItem onClick={() => showDialog(2, i._id)} button>
                      <ListItemIcon>
                        <Image />
                      </ListItemIcon>
                      <ListItemText primary={`${i.name}`} />
                    </ListItem>
                  );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
      {content.documentAssignment && (
        <Accordion
          square
          expanded={expanded === `panel3`}
          id="panel3"
          onChange={handleChange(`panel3`)}
        >
          <AccordionSummary aria-controls="panel31d-content">
            <Typography>Document Assignment</Typography>
          </AccordionSummary>
          <AccordionDetails id={`panel3-content`}>
            <List>
              {content.documentAssignment.map((i, j) => {
                if (user === i.student.id)
                  return (
                    <ListItem onClick={() => showDialog(3, i._id)} button>
                      <ListItemIcon>
                        <Image />
                      </ListItemIcon>
                      <ListItemText primary={`${i.name}`} />
                    </ListItem>
                  );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}
