import { Switch, Route } from "react-router-dom";
import "./App.css"
import register from "./components/Register/Register"
import login from "./components/Login/Login.jsx"
import CourseAddMainPage from "./components/CourseCreate/MainPageOne";
import CourseEditSubPage from "./components/CourseCreate/MainPageTwo";
import AdminPage from "./components/AdminPage/AdminPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {

  const correctDataHandler = (trans) => {
    if (!localStorage.getItem("jwt")) {
      trans.redirect('/login')
      console.log("dssf");
    }
    console.log("dssf");
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/register" exact component={register}/>
        <Route path="/login" exact component={login} />
        <Route path="/addcourse" component={CourseAddMainPage}  onEnter={ correctDataHandler }/>
        <Route
          path={`/editsubcontent/:id`}
          component={CourseEditSubPage}
          onEnter={ correctDataHandler }
        />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
