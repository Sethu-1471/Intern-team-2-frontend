import Header from './Header'
import './CSS/style.css'
import './JavaScripts/main'
import Home from './Home'
import About from './About'
import CallToAction from './CallToAction'
import WhyUs from './WhyUs'
const Landing = () => {
    return (
       <>
          <Header/>
          <Home/>
          <About/>
          <CallToAction/>
          <WhyUs/>
       </>
    )
}

export default Landing
