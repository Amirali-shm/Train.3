import React from "react";
import Admin from "../components/Admin/Admin";
import Login from "../components/Login/Login2";
import ResetPassword from "../components/resetPassword/ResetPassword";
import Signup from "../components/Signup/Signup";
import User from "../components/User/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Train = () => {
    return (
        <div>

            <Router>

                <Switch>
                    <Route path="/" exact> <Login/> </Route>
                    <Route path="/admin" exact> <Admin/> </Route>
                    <Route path="/user" exact> <User/> </Route>
                    <Route path="/signup" exact> <Signup/> </Route>
                    <Route path="/login" exact> <Login/> </Route>
                </Switch>
                
            </Router>
        </div>
    );
}
export default Train;