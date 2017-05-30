import React, { Component } from 'react';
import MenuDrawer from './MenuDrawer';
import UniversityMap from "./UniversityMap";
import Layout from '../shared_components/Layout.js';
//setting language support
import counterpart  from 'counterpart';
import Translate    from 'react-translate-component';

class RootMap extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonclicked:"all"};
    }
    getclickedbuttons(val) {
        this.setState({buttonclicked:val});
    }
    render() {
        return (
            <div>
                <Layout/>
                <UniversityMap selectedMarker={this.state.buttonclicked}/>
                <MenuDrawer getclickedbuttons={this.getclickedbuttons.bind(this)}/>
            </div>
        );
    }
}

export default RootMap;