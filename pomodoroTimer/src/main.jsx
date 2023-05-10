import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import {ChakraProvider} from "@chakra-ui/react";
import store from "./states/PomodoroTimerState.js";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    </Provider>
    , document.getElementById("root"));
