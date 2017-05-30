import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

class MapMenuFilter extends Component {
    constructor(props) {
            super(props);
            this.state={value:'all'};
    }
 
    handleChange (event, index, value) {this.props.getclickedbutton(value);this.setState({value})}
    
    render() {
        return (
                <DropDownMenu style={{width:"80%",marginLeft:"0"}} value={this.state.value} onChange={this.handleChange.bind(this)} autoWidth={false} >
                    <MenuItem value={"all"} primaryText="all" />
                    <MenuItem value={"economy"} primaryText="science economique" />
                    <MenuItem value={"literature"} primaryText="Litérature,Art et sc humaine" />
                    <MenuItem value={"tourism"} primaryText="Éducation,sport et tourisme" />
                    <MenuItem value={"technology"} primaryText="Technologies" />
                    <MenuItem value={"medical"} primaryText="médicale et paramédicale" />
                    <MenuItem value={"droit"} primaryText="droit et sciences juridiques" />
                    <MenuItem value={"biotech"} primaryText="agriculture,biotechnologie et environnement" />
                    <MenuItem value={"ingenierie"} primaryText="ingenierie" />
                </DropDownMenu>  
        );
    }
}

export default MapMenuFilter;