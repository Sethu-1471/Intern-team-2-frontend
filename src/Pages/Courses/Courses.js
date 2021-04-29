import React from 'react'
import './Courses.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CoursesList from '../../components/CoursesList/CoursesList'
import Coursedetail from '../../components/Coursedetail/Coursedetail'
import { Switch, Route } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
export default function Courses() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/courses/my" exact>
                    <Typography style={{textAlign:'center',marginTop:'30px'}} gutterBottom variant="h4" component="h2">
                        Your Courses
                    </Typography>
                    <CoursesList />
                </Route>
                <Route path="/courses/:course">
                    <Coursedetail />
                </Route>
                <Route path="/courses/" exact>
                    <CoursesList />
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}
