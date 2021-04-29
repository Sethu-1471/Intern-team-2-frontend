import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import CourseAddMainPage from "./components/CourseCreate/MainPageOne";
import CourseEditSubPage from "./components/CourseCreate/MainPageTwo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/courses" exact>
          <Courses />
        </Route> */}
        <Header />
        <Route path="/addcourse" exact component={CourseAddMainPage} />
        <Route
          path={`/editsubcontent/:id`}
          exact
          component={CourseEditSubPage}
        />
      </Switch>
    </>
  );
}

export default App;
