import React, { Component } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import Chart from "./Chart";

class Markers extends Component {
    constructor(props){
        super(props);
        this.state={markers:[]}
    }
    componentDidMount() {
        const markerData=G_univ_location;
        const allmarkers = [[36.955360, 8.749795,"municipal"],[36.9551, 8.789795,"party"],[36.94360, 8.749795,"municipal"],[36.955360, 8.89795,"party"]]
        const municipal = L.icon({
            iconUrl: 'http://localhost:8080/img/mortarboard.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        const economy = L.icon({iconUrl: 'http://localhost:8080/img/money.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const tourism = L.icon({iconUrl: 'http://localhost:8080/img/school-material.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const technology = L.icon({iconUrl: 'http://localhost:8080/img/computer.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const medical = L.icon({iconUrl: 'http://localhost:8080/img/microscope.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const droit = L.icon({iconUrl: 'http://localhost:8080/img/mortarboard.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const biotech = L.icon({iconUrl: 'http://localhost:8080/img/pines.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const literature = L.icon({iconUrl: 'http://localhost:8080/img/open-book.svg',iconSize: [40, 40],iconAnchor: [20, 20]});

        var rows = [];
        for (var i = 0; i < markerData.length; i++) {
            var latLon = markerData[i].lonlat;
            let lat=latLon.split(",")[0]
            let long=latLon.split(",")[1]
            var type=markerData[i].Section;
            var name =markerData[i].nom_de_universite
            var affectedmarker;
            if(type=="economy") affectedmarker=economy
            else if(type=="literature") affectedmarker=literature
            else if(type=="tourism") affectedmarker=tourism
            else if(type=="technology") affectedmarker=technology
            else if(type=="medical") affectedmarker=medical
            else if(type=="droit") affectedmarker=droit
            else if(type=="biotech") affectedmarker=biotech
              rows.push(<Marker position={[lat, long]} icon={affectedmarker} key={i}><Popup ><div>{name}</div></Popup></Marker>)

        }
        this.setState({markers:rows});
                console.log(rows)

    }
    componentWillReceiveProps(nextProps) {
        const markerData=G_univ_location;
        const chosenMarker = nextProps.selectedMarkers;
        const general = L.icon({
            iconUrl: 'http://localhost:8080/img/mortarboard.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        const economy = L.icon({iconUrl: 'http://localhost:8080/img/money.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const tourism = L.icon({iconUrl: 'http://localhost:8080/img/school-material.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const technology = L.icon({iconUrl: 'http://localhost:8080/img/computer.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const medical = L.icon({iconUrl: 'http://localhost:8080/img/microscope.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const droit = L.icon({iconUrl: 'http://localhost:8080/img/mortarboard.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const biotech = L.icon({iconUrl: 'http://localhost:8080/img/pines.svg',iconSize: [40, 40],iconAnchor: [20, 20]});
        const literature = L.icon({iconUrl: 'http://localhost:8080/img/open-book.svg',iconSize: [40, 40],iconAnchor: [20, 20]});

        var rows = [];
        for (var i = 0; i < markerData.length; i++) {
            var latLon = markerData[i].lonlat;
            let lat=latLon.split(",")[0]
            let long=latLon.split(",")[1]
            var type=markerData[i].Section;
            var name =markerData[i].nom_de_universite
            var affectedmarker;
            if((chosenMarker=="economy")&&(type=="economy")) {
                  rows.push(<Marker position={[lat, long]} icon={economy} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="literature")&&(type=="literature")){
                  rows.push(<Marker position={[lat, long]} icon={literature} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="tourism")&&(type=="tourism")){
                  rows.push(<Marker position={[lat, long]} icon={tourism} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="technology")&&(type=="technology")){
                  rows.push(<Marker position={[lat, long]} icon={technology} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="medical")&&(type=="medical")){
                  rows.push(<Marker position={[lat, long]} icon={medical} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="droit")&&(type=="droit")){
                  rows.push(<Marker position={[lat, long]} icon={droit} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="biotech")&&(type=="biotech")){
                  rows.push(<Marker position={[lat, long]} icon={biotech} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if(chosenMarker=="all"){
                     if(type=="economy") affectedmarker=economy
                      else if(type=="literature") affectedmarker=literature
                      else if(type=="tourism") affectedmarker=tourism
                      else if(type=="technology") affectedmarker=technology
                      else if(type=="medical") affectedmarker=medical
                      else if(type=="droit") affectedmarker=droit
                      else if(type=="biotech") affectedmarker=biotech
                     rows.push(<Marker position={[lat, long]} icon={affectedmarker} key={i}><Popup ><div>{name}</div></Popup></Marker>)
                }

        }
        this.setState({markers:rows});
        console.log(rows)
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