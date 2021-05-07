import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { AccountCircle } from "@material-ui/icons";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList(props) {
  const classes = useStyles();
  const [student, setStudent] = React.useState(props.student);

  React.useEffect(() => {
    setStudent(props.student);
  }, [props.student]);

  return (
    <List className={classes.root}>
      {student.map((res, i) => (
        <ListItem onClick={() => props.handleUser(res.user)} button id={i}>
          <ListItemAvatar>
            <Avatar>
              <AccountCircle />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={res.name} secondary={res.user} />
        </ListItem>
      ))}
    </List>
  );
}
