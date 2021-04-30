import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("jwt") && localStorage.getItem("user")) {
                    console.log(props.location.pathname);
                    const list = [ '/login','/register', '/']
                    if (!list.includes(props.location.pathname)) {
                        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("jwt");
                        return <Component {...props} />   
                    } else {
                        return <Redirect
                        to="/courselist"
                    />
                    }
                } else {
                    const list = [ '/login','/register', '/']
                    if (list.includes(props.location.pathname)) {
                        return <Component {...props} />
                    } else {
                        localStorage.clear();
                        return <Redirect
                            to="/login"
                        />   
                    }
                }
            }}
        />
    )
}