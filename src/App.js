import "./App.css";
import { Switch, Route } from "react-router-dom";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import AdminPage from "./Pages/Admin/Admin";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <Switch>
              <Route path="/register">
                <Register/>
              </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/courses" exact>
                    <Courses />
                </Route>
                <Route path="/admin" exact component={AdminPage} />
            </Switch>
        </>
    );
}

export default App;
