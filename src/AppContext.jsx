import React, {useState} from 'react';
import {getCurrentUser} from "./api/SecurityApi";

const AppContext = React.createContext(null);

const AppContextProvider = (props) => {
    const [context, setContext] = useState({
        currentUser: getCurrentUser(),
    });
    return (
        <AppContext.Provider value={[context, setContext]}>
            {props.children}
        </AppContext.Provider>
    );
};

export {AppContext, AppContextProvider};