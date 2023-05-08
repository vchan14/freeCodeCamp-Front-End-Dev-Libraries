import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import store from "./states/CalculatorStore.js";
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    </Provider>
, document.getElementById("root"));
