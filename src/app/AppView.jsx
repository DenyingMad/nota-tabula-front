import React from 'react';

import {Route, Switch} from "react-router-dom";
import {Register} from "../pages/register/Register";
import {Login} from "../pages/login/Login";
import Stub from "../pages/stub/Stub";
import AuthRoute from "../security/AuthRoute";
import {Epic} from "../components/epic/Epic";

const AppView = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/join" component={Register} exact/>
            <AuthRoute path="/dashboard" component={Epic} exact/>
            <AuthRoute path="/reports" component={Stub} exact/>
        </Switch>
    );
};

export default AppView;