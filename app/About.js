import React, { Component } from 'react';
import Layout from './shared_components/Layout.js'
import Paper from 'material-ui/Paper';

class About extends Component {

    render() {
     const style = {
        height: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
     }
        return (
            <div>
                <Layout/>
                <div className="col-md-2"></div>
                 <Paper className="col-md-8" style={style} zDepth={4} >
                    Description
                 </Paper>
                <div className="col-md-2"></div>

            </div>
        );
    }
}

export default About;