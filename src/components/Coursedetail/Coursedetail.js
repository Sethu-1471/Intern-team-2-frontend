import React from 'react';
import './Coursedetail.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Coursedetail() {
    return (
        <div className="d-flex">
            <div>
                <video controls className="border_right">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                <div className="d-flex justify-content-center w_70vw p-5 border_right">
                    <div>
                        <div>
                            <div className="c_title">
                                Description
                            </div>
                            <div className="c_text">                               
                                In this introductory tutorial, we'll dive into the world of KeyShot. KeyShot is one of the easiest and fastest 3d rendering programs on the market and can help create fantastic renders of your 3d models with just a few button clicks and some basic information. Whether you're an adept professional or a complete novice, this software will have your 3d assets looking amazing in no time. With its great real-time 'drag and drop' ability, you'll be able to apply your 3d model with a variety of photo-real materials within pre-set environments for stunning results !
                            </div>
                            <hr/>
                        </div>
                        <div>
                            <div className="c_title">
                                Instructor
                            </div>
                            <div className="c_text">                               
                                3dmotive is High Quality 3d and Game Art Training by Industry Pros! Whether you are brand new to the world of Game Art, 3d, Architecture or Film - or maybe just interested in brushing up your techniques for intermediate or advanced levels of 3d with a focus on video games, 3dmotive is your one-stop-shop for all your 3d and Game Art related tutorials! Got questions? Interested in a new course topic? Let us know!
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100">
                <div className="Head">
                    Course content
                </div>
                <div className="border_gr">
                   <ControlledAccordions/>
                </div>
            </div>
        </div>
    )
}


function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {
            [0,1,2,3,45,6,7].map((d,i)=>(
                <Accordion key={i} expanded={expanded === i} onChange={handleChange(i)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.heading}>Section 1: Learning the basics of KeyShot</Typography>
                    {/* <Typography className={classes.secondaryHeading}>I am an </Typography> */}
                    </AccordionSummary>
                    <AccordionDetails>
                    <InteractiveList/>
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </div>
  );
}


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function InteractiveList() {
  return (
        <List dense={false}>
            {generate(
            <ListItem style={{cursor:'pointer'}} >
                <ListItemIcon>
                <PlayCircleFilledIcon />
                </ListItemIcon>
                <ListItemText
                primary="1. Introduction"
                secondary={'1 min'}
                />
            </ListItem>,
            )}
        </List>
  );
}
