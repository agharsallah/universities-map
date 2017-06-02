import React from 'react';
import  ReactDOM  from 'react-dom';
import { Router, Route, browserHistory,IndexRoute  } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RootMap from './basic_map/RootMap';
import About from './About';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider>
    <Router history={browserHistory}>
        <Route  path="/" component={RootMap}/> 
        <Route path="/about" component={About}/> 
    </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
    );