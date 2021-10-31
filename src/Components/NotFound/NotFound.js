import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound text-center">
            <h1 className="text-secondary mt-5"><span className="text-danger">Sorry!</span> We've failed to find the page</h1>
        </div>
    );
};

export default NotFound;