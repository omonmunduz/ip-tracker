import React, {useEffect} from 'react';
import {useIpContext} from '../context/IPProvider';
import {Icon, L} from 'leaflet';

import './Mapp.css';
const Mapp = () => {
    const {geolocation, loading, error} = useIpContext();
    let location = {};
    
        if(!error && !loading){
            const {lat, lng} = geolocation.location;
            location = {lat, lng};
        } 
     console.log(location.lat)
     console.log(location.lng)
    return(
        <div id="mapid">
            <p> <span>Latitude :</span> {location.lat}</p>
            <p> <span>Longitude :</span> {location.lng}</p>
        </div>
    )

};
export default Mapp;