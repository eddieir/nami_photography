import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { BrowserRouter as Router } from "react-router-dom";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {ParallaxProvider} from 'react-scroll-parallax';

import { Router } from 'react-router';
import {createHashHistory} from 'history';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });



ReactDOM.render(
    <Router 
        history={hashHistory}
    > 
        {/*<ParallaxProvider>*/}
            <App/>
        {/*</ParallaxProvider>*/}
    </Router>,
    document.getElementById('container')
);
serviceWorker.unregister();
