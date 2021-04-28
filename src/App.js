import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Courses from './Pages/Courses/Courses'
import Home from './Pages/Home/Home'
function App() {
  return (
    <>
        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </>
  );
}

export default App;