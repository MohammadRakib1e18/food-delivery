import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // destructuring
    const {index, picture, name, about} = props.service;

    return (
        <div className="service">
            <img className="text-center" src={picture} alt="" />
            <div className="text-center">
                <h4>{name}</h4>
                <p>{about}</p>
                <Link to={`/booking/${index}`}>
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