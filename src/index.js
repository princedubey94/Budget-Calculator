import React from "react";
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";

import{Provider}from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
<SpeechProvider appId="ac8c23ef-6d06-425d-8400-89fbb0e706c9" language="en-US">
    <Provider>
        <App/>
    </Provider>
</SpeechProvider>,
    document.getElementById('root')
)
