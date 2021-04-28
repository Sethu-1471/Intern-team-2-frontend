import React from 'react'
import './Courses.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CoursesList from '../../components/CoursesList/CoursesList'
export default function Courses() {
    return (
        <>
            <Header/>
            <CoursesList/>
            <Footer/>
        </>
    )
}
