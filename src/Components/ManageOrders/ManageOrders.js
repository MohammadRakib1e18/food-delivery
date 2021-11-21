import React, { useState, useEffect } from "react";
import useAuth from "./../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://morning-harbor-17755.herokuapp.com/allOrders`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // DELETE AN USER
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://morning-harbor-17755.herokuapp.com/deleteOrder/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                            const remainingOrders = orders.filter(
                                (order) => order._id !== id
                            );
                            setOrders(remainingOrders);
                        }
                    });
            }
        });
    };

    return (
        <div>
            <h2 className="my-4">
                <span className="text-danger">Total</span>{" "}
                <span className="text-success">Orders</span>
            </h2>
            <h5>
                <span className="text-secondary">order count:</span>{" "}
                <span className="text-danger">({orders.length})</span>
            </h5>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ fontSize: "25px", textAlign: "center" }}
                            >
                                Food
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "25px" }}>
                                Client
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "25px" }}>
                                Food Name
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "25px" }}>
                                Phone
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "25px" }}>
                                E-mail
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "25px" }}>
                                Price
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "25px" }}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <img
                                        src={order.picture}
                                        style={{ width: "300px" }}
                                        alt={order.name}
                                    />
                                </TableCell>
                                <TableCell
                                    style={{
                                        fontSize: "1.5em",
                                        color: "chocolate",
                                    }}
                                    align="right"
                                >
                                    {order.name}
                                </TableCell>
                                <TableCell
                                    style={{
                                        fontSize: "1em",
                                        color: "royalblue",
                                    }}
                                    align="right"
                                >
                                    {order.foodName}
                                </TableCell>
                                <TableCell
                                    style={{ fontSize: "1em" }}
                                    align="right"
                                >
                                    {order.phone}
                                </TableCell>
                                <TableCell
                                    style={{ fontSize: "1em" }}
                                    align="right"
                                >
                                    {order.email}
                                </TableCell>
                                <TableCell
                                    style={{ fontSize: "1em" }}
                                    align="right"
                                >
                                    ${order.price}
                                </TableCell>
                                <TableCell
                                    style={{ fontSize: "1em" }}
                                    align="right"
                                >
                                    <Button
                                        sx={{ width: "50%", m: 1 }}
                                        type="submit"
                                        variant="contained"
                                        color="error"
                                        onClick={() =>
                                            handleDeleteUser(order._id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;
