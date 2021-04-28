import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Courses from './Pages/Courses/Courses'
import Home from './Pages/Home/Home'
import Register from './components/Register/Register';
function App() {
  return (
    <>
        <Switch>
          <Route path="/register">
          <Register/>
          </Route>
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