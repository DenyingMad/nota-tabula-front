import React from 'react';
import ReactDOM from 'react-dom';
import {AppContextProvider} from "./AppContext";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";

const Root = (
    <BrowserRouter basename="/">
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));