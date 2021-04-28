import {
  Switch,
  Route
} from "react-router-dom";
import Courses from './Pages/Courses/Courses'
import Home from './Pages/Home/Home'
import Landing from './components/Landing/Landing'
function App() {
  return (
    <>
        
        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/">
            <Landing/>  
          </Route>
        </Switch>
    </>
  );
}

export default App;