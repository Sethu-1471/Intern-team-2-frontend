import "./App.css";
import { Switch, Route } from "react-router-dom";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import AdminPage from "./Pages/Admin/Admin";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/courses">
                    <Courses />
                </Route>
                <Route path="/admin" exact component={AdminPage} />
            </Switch>
        </>
    );
}

export default App;