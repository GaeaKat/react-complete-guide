import ReactDOM from 'react-dom/client';
import React from "react";
import './index.css';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DevSupport><React.StrictMode><App /></React.StrictMode></DevSupport>);
