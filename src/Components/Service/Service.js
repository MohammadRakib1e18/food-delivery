import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // destructuring
    const {_id, img, Description, price, Name} = props.service;

    return (
        <div className="service">
            <img className="text-center" src={img} alt="" />
            <div className="text-center">
                <h4>{Name}</h4>
                <h5>Price: {price}</h5>
                <p>{Description}</p>

                <Link to={`/booking/${_id}`}>
                    <button className="btn btn-warning text-primary fw-bolder w-50"><i class="fa fa-cart-plus"></i> Order Now</button>
                </Link>        
            </div>
        </div>
    );
};

export default Service;