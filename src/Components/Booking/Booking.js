import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { newServices } from '../Services/Services';

const Booking = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    console.log(services);
    // const services = newServices;
    // let getServe;
    // for(const serve of services){
    //     if(parseInt(serve.index)===parseInt(serviceId)){
    //         getServe=serve;break;
    //     }
    // }
    return (
        <div className="order-products">
            <h2>this is service number: {serviceId}</h2>
        </div>
    );
};

export default Booking;