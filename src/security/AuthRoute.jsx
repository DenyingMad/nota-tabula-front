import React, {useContext} from 'react';
import {AppContext} from "../AppContext";
import {Redirect, Route} from "react-router-dom";
import HarnessView from "../components/harness/HarnessView";

const AuthRoute = ({component: Component, ...otherProps}) => {
    const [context] = useContext(AppContext);
    const {currentUser} = context;

    return (
        <Route
            {...otherProps}
            render={props => {
                if (!currentUser) {
                    return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                }

                const getPageComponent = () => {
                    // todo если нет прав доступа, то оказ и выдача ошибки
                    return Component;
                }

                const PageComponent = getPageComponent();
                return <HarnessView currentUser={currentUser}><PageComponent {...props}/></HarnessView>;
            }}
        />
    );
};

export default AuthRoute;