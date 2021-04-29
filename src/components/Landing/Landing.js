import Header from './Header'
import './CSS/style.css'
import './JavaScripts/main'
import Home from './Home'
import About from './About'
import CallToAction from './CallToAction'
import WhyUs from './WhyUs'
import Courses from './Courses'
import Footer from './Footer'
import Contact from './Contact'
const Landing = () => {
    return (
       <>
          <Header/>
          <Home/>
          <About/>
          <Courses/>
          <CallToAction/>
          <WhyUs/>
          <Contact/>
          <Footer/>
       </>
    )
}

export default Landing
