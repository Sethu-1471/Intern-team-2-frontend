import { Switch, Route } from "react-router-dom";
import "./App.css";
import Chatbot from "./components/Chatbot/chat";
import register from "./components/Register/Register";
import login from "./components/Login/Login.jsx";
import CourseAddMainPage from "./components/CourseCreate/MainPageOne";
import CourseEditSubPage from "./components/CourseCreate/MainPageTwo";
import CourseList from "./components/CoursesHome/CoursesList";
import Coursedetail from "./components/Student/CourseStudy/Coursedetail";
import VideoView from "./components/ModuleContentView/VideoView"
import Loader from "./components/Loader/Loader"
import Error404 from "./components/Error/Error404"
import MyCourse from "./components/Student/MyCourse"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import ProfilePage from "./components/Profile/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useLocation } from "react-router-dom";
import {useAxiosLoader} from './api/index'
//student
import StudentPaymentEnroll from "./components/Student/PaymentEnroll";
import AdminPage from "./components/AdminPage/AdminPage";
import { useState } from "react";


function App() {
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const [load, setload] = useAxiosLoader();
  const startLoad = () =>{ setload(true) }
  const stopLoad = () =>{ setload(false) }
  const list = ["login", "register", "/", "payment", ""];
  return (
    <>
      { load && 
      <Loader/>      
      }
      <ToastContainer />
      {list.includes(location.pathname.split("/")[1]) ? null : <Header />}
      <Switch>
        <ProtectedRoute path="/" exact component={Landing} />
      
        <ProtectedRoute path="/register" exact component={register} />
        <ProtectedRoute path="/login" exact component={login} />
        <ProtectedRoute path="/courselist" component={CourseList} />
        <ProtectedRoute path="/addcourse" component={CourseAddMainPage} />
        <ProtectedRoute
          path={`/editsubcontent/:id`}
          component={CourseEditSubPage}
        />
        <ProtectedRoute path={`/course/:id`} component={Coursedetail} />
        <ProtectedRoute
          path={`/editcourse/:id`}
          component={CourseAddMainPage}
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
