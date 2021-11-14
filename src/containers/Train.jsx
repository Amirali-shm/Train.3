import React from "react";
import Admin from "../components/Admin/Admin";
import Login from "../components/Login/Login2";
import ResetPassword from "../components/resetPassword/ResetPassword";
import Signup from "../components/Signup/Signup";
import User from "../components/User/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Train = () => {
    return (
        <div>
            <Signup />
            <Router>
                <Routes>
                    <Route path="/Admin" component={Admin} />
                    <Route path="/User" component={User} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Login" component={Login} />
                </Routes>
            </Router>
        </div>
    );
}
export default Train;