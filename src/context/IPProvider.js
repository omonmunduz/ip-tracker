import {createContext, useContext, useState, useEffect } from 'react';

const IPContext = createContext();

const initialValue = {
    ip: '8.8.8.8',
    location: {
      city: 'Mountain View',
      country: 'US',
      lat: 37.4223,
      lng: -122.085,
      postalCode: '94043',
      timezone: '-08:00',
    },
    isp: 'Google LLC',
  };

  const IPProvider = ({children}) => {
    const [value, setValue] = useState('');
    const [geolocation, setGeolocation] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => setValue(e.target.value);

    const initGeolocation = () => {
        setLoading(true);
        const IP_Adress = value;
        const url = `
        https://geo.ipify.org/api/v1?apiKey=at_1JOq2YXUKhBaeynQG5NFIX0RtbdkS&ipAddress=${IP_Adress}`;
        fetch(url).then(res =>{
            if(!res.ok){
                throw res
            }
            return res.json()
        }).then(data => {
            const {ip, location, isp} = data;
            setGeolocation({ip, location, isp});
            setLoading(false)
        }).catch(error =>{
            error.json().then(message => {
                setError(message)
                setLoading(false);
            })
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        initGeolocation();
        setValue('');
    };
    useEffect(() => {
        initGeolocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const contextValue =  {
        value,
        geolocation,
        error,
        loading,
        handleChange,
        handleSubmit
    };


    return <IPContext.Provider value={contextValue}>{children}</IPContext.Provider>
  };
  export default IPProvider;
  export const useIpContext = () => useContext(IPContext);