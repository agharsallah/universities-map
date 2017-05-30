import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory,IndexRoute  } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RootMap from './basic_map/RootMap';
import About from './About';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
render((
    <MuiThemeProvider>
    <Router history={browserHistory}>
    <div>
        <Route  path="/" component={RootMap}/> 
        <Route path="/about" component={About}/> 
        </div>
    </Router>
    </MuiThemeProvider>
    ),document.querySelector('#root'));