import React from 'react';
import img from '../../Images/get-in-touch.png';

// this is the contact page
const Contact = () => {
    return (
        <div className="text-center my-5">
            <h2 className="text-info">We're ready to teach you</h2>
            <article className="card mb-3 shadow-lg mx-3 rounded">
                <div className="row g-0">
                    <div className="col-6 ">
                        <img src={img} className="img-fluid img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-6">
                        <div className="card-body mt-5">
                            <h3 className="card-title text-secondary">Contact Info</h3>
                            <p className="card-text"><span className="fw-bolder">Address:</span> 77 Indian St. Baltimore, MD 21206</p>
                            <p className="card-text"><span className="fw-bolder">E-mail:</span> trustedrakib@gmail.com</p>
                            <p className="card-text"><span className="fw-bolder">Phone:</span> +8801720307380</p>
                        </div>
                    </div>
                </div>
            </article>
            <section className="mt-5">
                <h2 className="text-decoration-underline text-secondary mb-3">Drop your message</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="mb-3 me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="user name"/>
                    </div>
                    <div className="mb-3 ms-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Type your Messages</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </section>
        </div>
    );
};

export default Contact;