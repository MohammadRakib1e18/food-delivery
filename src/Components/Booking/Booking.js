import { Grid } from "@mui/material";
import { Container, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Booking = () => {
    const { id } = useParams();
    const { user, isLoading } = useAuth();
    const [services, setServices] = useState([]);
    const [placeOrder, setPlaceOrder] = useState({});

    useEffect(() => {
        fetch("https://morning-harbor-17755.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    let selectedProduct = {};
    let len = services.length;

    for (let i = 0; i < len; i++) {
        if (services[i]._id === id) {
            selectedProduct = services[i];
        }
    }
    // destructuring
    const { img, price, Name } = selectedProduct;

    placeOrder["name"] = user.displayName;
    placeOrder["email"] = user.email;
    placeOrder["foodName"] = Name;
    placeOrder["price"] = price;
    placeOrder["picture"] = img;

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPlaceOrder = { ...placeOrder };
        newPlaceOrder[field] = value;
        setPlaceOrder(newPlaceOrder);
    };
    const handleOrder = (e) => {
        fetch("https://morning-harbor-17755.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(placeOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.result.insertedId) {
                    alert("Order Placed Successfully!");
                    // <Alert severity="success">Order Booked Successfully!</Alert>
                }
            });

        e.preventDefault();
    };

    return (
        <Container sx={{ mt: 2 }}>
            <h2 className="text-info">
                Favourite Food : 
                <span className="text-danger"> {Name}</span>
            </h2>
            <hr style={{ paddingBottom: "2px", color: "chocolate" }} />
            <Grid container spacing={6}>
                <Grid item xs={6} md={6} sx={{ mt: 1 }}>
                    <img
                        style={{ width: "80%", height: "80%" }}
                        src={img}
                        alt={Name}
                    />
                </Grid>
                <Grid item xs={6} md={6} sx={{ mt: 5 }}>
                    {!isLoading && (
                        <form onSubmit={handleOrder}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                defaultValue={user.displayName}
                                name="name"
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                defaultValue={user.email}
                                name="email"
                                type="email"
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your district"
                                name="district"
                                onBlur={handleOnBlur}
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your phone"
                                name="phone"
                                onBlur={handleOnBlur}
                                variant="standard"
                                required
                            />

                            <Button
                                sx={{ width: "75%", m: 1 }}
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                <i class="fa fa-check">&nbsp;</i>Place order now
                            </Button>
                        </form>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Booking;
