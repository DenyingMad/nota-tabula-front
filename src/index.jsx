import React from 'react';
import ReactDOM from 'react-dom';
import {AppContextProvider} from "./AppContext";
import App from "./app/App";

const Root = (
    <AppContextProvider>
        <App/>
    </AppContextProvider>
);

ReactDOM.render(Root, document.getElementById('root'));