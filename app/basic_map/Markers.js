import React, { Component } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
const economy = L.icon({iconUrl: 'http://localhost:8080/img/money.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const tourism = L.icon({iconUrl: 'http://localhost:8080/img/school-material.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const technology = L.icon({iconUrl: 'http://localhost:8080/img/computer.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const medical = L.icon({iconUrl: 'http://localhost:8080/img/microscope.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const droit = L.icon({iconUrl: 'http://localhost:8080/img/mortarboard.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const biotech = L.icon({iconUrl: 'http://localhost:8080/img/pines.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const literature = L.icon({iconUrl: 'http://localhost:8080/img/open-book.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
const ingenierie = L.icon({iconUrl: 'http://localhost:8080/img/set-square.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
class Markers extends Component {
    constructor(props){
        super(props);
        this.state={markers:[]}
    }
    componentDidMount() {
        const markerData=G_univ_location;
        const allmarkers = [[36.955360, 8.749795,"municipal"],[36.9551, 8.789795,"party"],[36.94360, 8.749795,"municipal"],[36.955360, 8.89795,"party"]]
        let rows = [];
        let markers = []
        for (let i = 0; i < markerData.length; i++) {
            let latLon = markerData[i].lonlat;
            let lat=latLon.split(",")[0]
            let long=latLon.split(",")[1]
            let type=markerData[i].Section;
            let name =markerData[i].nom_de_universite
            let affectedmarker;
            if(type=="economy") affectedmarker=economy
            else if(type=="literature") affectedmarker=literature
            else if(type=="tourism") affectedmarker=tourism
            else if(type=="technology") affectedmarker=technology
            else if(type=="medical") affectedmarker=medical
            else if(type=="droit") affectedmarker=droit
            else if(type=="biotech") affectedmarker=biotech
            else if(type=="ingenierie") affectedmarker=ingenierie
             markers.push({lat:lat,lng:long,options:{icon:affectedmarker,title:name},popup:name}  )  

        }
        rows.push(<MarkerClusterGroup markers={markers} wrapperOptions={{enableDefaultStyle: true}}/>)
        this.setState({markers:rows});

    }
    componentWillReceiveProps(nextProps) {
        const markerData=G_univ_location;
        const chosenMarker = nextProps.selectedMarkers;
        const general = L.icon({iconUrl: 'http://localhost:8080/img/mortarboard.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        var rows = [];
        var markers = []

        for (var i = 0; i < markerData.length; i++) {
            var latLon = markerData[i].lonlat;
            let lat=latLon.split(",")[0]
            let long=latLon.split(",")[1]
            var type=markerData[i].Section;
            var name =markerData[i].nom_de_universite
            var affectedmarker;
            if((chosenMarker=="economy")&&(type=="economy")) {
                   markers.push({lat:lat,lng:long,options:{icon:economy,title:name},popup:name}  )  
                }else if((chosenMarker=="literature")&&(type=="literature")){
                   markers.push({lat:lat,lng:long,options:{icon:literature,title:name},popup:name}  )  
                }else if((chosenMarker=="tourism")&&(type=="tourism")){
                   markers.push({lat:lat,lng:long,options:{icon:tourism,title:name},popup:name}  )  
                }else if((chosenMarker=="technology")&&(type=="technology")){
                   markers.push({lat:lat,lng:long,options:{icon:technology,title:name},popup:name}  )  
                }else if((chosenMarker=="medical")&&(type=="medical")){
                   markers.push({lat:lat,lng:long,options:{icon:medical,title:name},popup:name}  )  
                }else if((chosenMarker=="droit")&&(type=="droit")){
                   markers.push({lat:lat,lng:long,options:{icon:droit,title:name},popup:name}  )  
                }else if((chosenMarker=="biotech")&&(type=="biotech")){
                   markers.push({lat:lat,lng:long,options:{icon:biotech,title:name},popup:name}  )  
                }else if((chosenMarker=="ingenierie")&&(type=="ingenierie")){
                   markers.push({lat:lat,lng:long,options:{icon:ingenierie,title:name},popup:name}  )  
                }else if(chosenMarker=="all"){
                     if(type=="economy") affectedmarker=economy
                      else if(type=="literature") affectedmarker=literature
                      else if(type=="tourism") affectedmarker=tourism
                      else if(type=="technology") affectedmarker=technology
                      else if(type=="medical") affectedmarker=medical
                      else if(type=="droit") affectedmarker=droit
                      else if(type=="biotech") affectedmarker=biotech
                   markers.push({lat:lat,lng:long,options:{icon:affectedmarker,title:name},popup:name}  )  
                }

        }
        rows.push(<MarkerClusterGroup markers={markers} wrapperOptions={{enableDefaultStyle: true}}/>)
        this.setState({markers:rows});
    }
    
    
    render() {

        return (
            <div>
                    {this.state.markers}
            </div>
        );
    }
}

export default Markers;