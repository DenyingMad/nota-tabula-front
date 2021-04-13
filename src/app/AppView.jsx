import React from 'react';

import {Route, Switch} from "react-router-dom";
import {Register} from "../pages/register/Register";
import {Login} from "../pages/login/Login";
import Stub from "../pages/stub/Stub";
import AuthRoute from "../security/AuthRoute";
import {Dashboard} from "../pages/dashboard/Dashboard";

const AppView = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/join" component={Register} exact/>
            <AuthRoute path="/dashboard" component={Dashboard} exact/>
            <AuthRoute path="/reports" component={Stub} exact/>
        </Switch>
    );
};

export default AppView;
