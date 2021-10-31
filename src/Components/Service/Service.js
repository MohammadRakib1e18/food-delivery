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
                    <button className="btn btn-warning">Order Now</button>
                </Link>
                {/* {
                    isLog?  <Link to={`/getdetailed/${index}`}>
                                <div class="d-grid gap-2 col-6 mx-auto ">
                                <button class="btn btn-secondary" type="button">Button</button>
                                </div>
                            </Link>:
                            <Link to="/login">
                                <div class="d-grid gap-2 col-6 mx-auto ">
                                <button class="btn btn-secondary" type="button">Button</button>
                                </div>
                            </Link>
                } */}
                
            </div>
        </div>
    );
};

export default Service;