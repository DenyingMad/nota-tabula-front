import React from 'react';

import {Switch} from "react-router-dom";
import Stub from "../pages/stub/Stub";
import AuthRoute from "../security/AuthRoute";
import {Dashboard} from "../pages/dashboard/Dashboard";

const AppView = () => {
    return (
        <Switch>
            <AuthRoute path="/dashboard" component={Dashboard} exact/>
            <AuthRoute path="/reports" component={Stub} exact/>
        </Switch>
    );
};

export default AppView;