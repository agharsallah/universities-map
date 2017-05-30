import React, { Component } from 'react';
import { Map, Popup, TileLayer, GeoJSON, FeatureGroup, Tooltip,LayersControl } from 'react-leaflet';
import Markers from './Markers'
import Control from 'react-leaflet-control';

class UniversityMap extends Component {
    constructor(props){
        super(props);
        this.state={feature:""}
    }
     getColor(d) {
	    return d > 30 ? '#000000' :
	           d > 20  ? '#2c7fb8' :
	           d > 18  ? '#81D4FA' :
	           d > 12  ? '#B3E5FC' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#B2DFDB';
	}
    style(feature) {
	    return {
	        fillColor: this.getColor(feature.properties.seats),
	        weight: 1,
	        opacity: 1,
	        color: 'white',
	        fillOpacity: 0.4
	    };
	}
    highlightFeature(e) {
	    var layer = e.target;
     this.setState({feature:layer.feature.properties.seats});
    return layer.setStyle( {
        weight: 2,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
	}
    resetFeature(e) {
	    var layer = e.target;
	    layer.setStyle({
	        weight: 5,

	    });
        this.setState({feature:""});
	}
    render() {
	
        const position = [35.055360, 9.749795];
        return (
            
                <Map maxZoom={23} center={position} zoom={7} className="initialposition" style={{height:550,position:"relative",zIndex:0}}>
                    <TileLayer
                    url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Markers selectedMarkers={this.props.selectedMarker}/>
                    <GeoJSON data= {G_districts}   
                            style={this.style.bind(this)}    
                            onEachFeature={
                                (feature, layer) => {
                                    layer.bindPopup(feature.properties.name_en);
                                    layer.on({mouseover: this.highlightFeature.bind(this)});
                                    layer.on({mouseout: this.resetFeature.bind(this)});
                                }
                            }
                    />
                </Map>

        );
    }
}

export default UniversityMap;
