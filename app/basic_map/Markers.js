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
        const party = L.icon({
            iconUrl: 'http://localhost:8080/img/mortarboard.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        var rows = [];
        for (var i = 0; i < markerData.length; i++) {
            var latLon = markerData[i].lonlat;
            let lat=latLon.split(",")[0]
            let lon=latLon.split(",")[1]
            var type=markerData[i].Section;
            var name =markerData[i].nom_de_universite
            var affectedmarker;
            if(type=="science economique") {affectedmarker=municipal}else{affectedmarker=party}
            rows.push(<Marker position={[lat,lon]} icon={affectedmarker} key={i+20}>
                            <Popup maxWidth="600">
                                <div>{name}</div>
                            </Popup>
                        </Marker>
                        )
        }
        this.setState({markers:rows});
                console.log(rows)

    }
/*    componentWillReceiveProps(nextProps) {
        const chosenMarker = nextProps.selectedMarkers;
        const allmarkers = [[36.955360, 8.749795,"municipal","Steg"],[36.9551, 8.789795,"party","Nahdha"],[36.94360, 8.749795,"municipal","Sonede"],[36.955360, 8.89795,"party","Al Tayar"]]
        const municipal = L.icon({
            iconUrl: 'http://localhost:8080/img/mortarboard.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        const party = L.icon({
            iconUrl: 'http://localhost:8080/img/marker-party.png',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        var rows = [];
        for (var i = 0; i < allmarkers.length; i++) {
            var lat=allmarkers[i][0];
            var long = allmarkers[i][1];
            var type=allmarkers[i][2];
            var name=allmarkers[i][3];
            var affectedmarker;
            if((chosenMarker=="municipal")&&(type=="municipal")) {
                  rows.push(<Marker position={[lat, long]} icon={municipal} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if((chosenMarker=="party")&&(type=="party")){
                  rows.push(<Marker position={[lat, long]} icon={party} key={i}><Popup ><p>{name}</p></Popup></Marker>)
                }else if(chosenMarker=="all"){
                     if(type=="municipal") {affectedmarker=municipal}else{affectedmarker=party}
                     rows.push(<Marker position={[lat, long]} icon={affectedmarker} key={i}><Popup ><Chart/></Popup></Marker>)
                }

        }
        this.setState({markers:rows});
        console.log(rows)
    }*/
    
    
    render() {

        return (
            <div>
                    {this.state.markers}
            </div>
        );
    }
}

export default Markers;