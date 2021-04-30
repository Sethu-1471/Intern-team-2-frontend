import { Switch, Route } from "react-router-dom";
import "components/FontawesomeIcons";
import "./App.css"
import register from "./components/Register/Register"
import login from "./components/Login/Login.jsx"
import CourseAddMainPage from "./components/CourseCreate/MainPageOne";
import CourseEditSubPage from "./components/CourseCreate/MainPageTwo";
import CourseList from "./components/CoursesHome/CoursesList"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import { ProtectedRoute } from "./ProtectedRoute";
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const list = ['/login', '/register', '/']
  return (
    <>
      <ToastContainer />
      {list.includes(location.pathname) ? null : <Header />}
      <Switch>
      {/* <ProtectedRoute path="/" exact component={login}/> */}
      <ProtectedRoute path="/register" exact component={register}/>
        <ProtectedRoute path="/login" exact component={login} />
        <ProtectedRoute path="/courselist" component={CourseList} />
        <ProtectedRoute path={`/courselist/token`} component={CourseList} />
        <ProtectedRoute path="/addcourse" component={CourseAddMainPage} />
        <ProtectedRoute
          path={`/editsubcontent/:id`}
          component={CourseEditSubPage}
        />
        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </>
  );
}

export default App;
