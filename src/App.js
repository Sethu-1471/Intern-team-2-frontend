import { Switch, Route } from "react-router-dom";
import "./App.css";
import register from "./components/Register/Register";
import login from "./components/Login/Login.jsx";
import CourseAddMainPage from "./components/CourseCreate/MainPageOne";
import CourseEditSubPage from "./components/CourseCreate/MainPageTwo";
import CourseList from "./components/CoursesHome/CoursesList";
import Coursedetail from "./components/Student/CourseStudy/Coursedetail";
import VideoView from "./components/ModuleContentView/VideoView"
import Error404 from "./components/Error/Error404"
import MyCourse from "./components/Student/MyCourse"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import ProfilePage from "./components/Profile/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useLocation } from "react-router-dom";

//student
import StudentPaymentEnroll from "./components/Student/PaymentEnroll";

function App() {
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const list = ["login", "register", "/", "payment", ""];
  return (
    <>
      <ToastContainer />
      {list.includes(location.pathname.split("/")[1]) ? null : <Header />}
      <Switch>
        {/* <ProtectedRoute path="/" exact component={login}/> */}
        <ProtectedRoute path="/register" exact component={register} />
        <ProtectedRoute path="/login" exact component={login} />
        <ProtectedRoute path="/courselist" component={CourseList} />
        {/* <ProtectedRoute path={`/courselist/token`} component={CourseList} /> */}
        <ProtectedRoute path="/addcourse" component={CourseAddMainPage} />
        <ProtectedRoute
          path={`/editsubcontent/:id`}
          component={CourseEditSubPage}
        />
        <ProtectedRoute
          path={`/course/:id`}
          component={Coursedetail}
        />
        <ProtectedRoute
          path={`/payment/:id`}
          component={StudentPaymentEnroll}
        />
        <ProtectedRoute path={"/profile"} component={ProfilePage} />
        <ProtectedRoute path={"/mycourse"} component={MyCourse} />
        <ProtectedRoute path={"/videoview/:cid/:mcid"} component={VideoView} />
        <Route path="*" component={Error404} />
      </Switch>
    </>
  );
}

export default App;
