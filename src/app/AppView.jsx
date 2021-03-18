import React from 'react';

import {Route, Switch} from "react-router-dom";
import {Register} from "../pages/register/Register";
import {Login} from "../pages/login/Login";
import HarnessView from "../components/harness/HarnessView";
import Stub from "../pages/stub/Stub";

const AppView = () => {
    return (
        <HarnessView>
            <Switch>
                <Route path="/login" component={Login} exact/>
                <Route path="/join" component={Register} exact/>
                <Route path="/dashboard" component={Stub} exact/>
                <Route path="/reports" component={Stub} exact/>
            </Switch>
        </HarnessView>
    );
};

export default AppView;