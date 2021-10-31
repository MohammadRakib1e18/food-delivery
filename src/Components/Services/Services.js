import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

export let newServices=[];
const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    newServices=services;
    return (
        <div className="mt-4 services">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service> )
            }
            
        </div>
    );
};

export default Services;