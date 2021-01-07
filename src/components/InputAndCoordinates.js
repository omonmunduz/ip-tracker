import React from 'react';
import {useIpContext} from '../context/IPProvider';
import './InputAndCoordinates.css';

const InputAndCoordinates = () => {
    const {value, handleSubmit, handleChange, geolocation ,error, loading} = useIpContext();
    let result = {};

    if(!error && !loading){
        const {ip, location, isp }  = geolocation;
        const {region, city, timezone, postalCode} = location;

        result = {
            ip,
            loc:`${city}, ${region}, ${postalCode}`,
            timezone,
            isp
        }
    }

    
    return <div className="coordinates">
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}> 
            <input type='text'placeholder="search for any IP address or domain" value={value} onChange={handleChange}/>
            <button type="submit"></button>
        </form>
        <div className="res">
            <div className= " box ip-adress">
                <p className="coord-title">IP ADDRESS</p>
                <p className="coord-val">{result.ip}</p>
            </div>
            <div className="box location">
                <p className="coord-title">Location</p>
                <p className="coord-val">{result.loc}</p>
            </div>
            <div className="box timezon">
                <p className="coord-title">Timezone</p>
                <p className="coord-val">{result.timezone}</p>
            </div>
            <div className="box ISP">
                <p className="coord-title">ISP</p>
                <p className="coord-val">{result.isp}</p>
            </div>
        </div>
    </div>
};
export default InputAndCoordinates;