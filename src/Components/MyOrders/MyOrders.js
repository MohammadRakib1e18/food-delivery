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

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://morning-harbor-17755.herokuapp.com/order?email=${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    // DELETE AN USER
    const handleDeleteUser = (id) => {
        const agreeToDelete = window.confirm(
            "Are you sure, you want to delete?"
        );
        console.log(agreeToDelete);
        if (agreeToDelete) {
            const url = `https://morning-harbor-17755.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("data: ", data);
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingOrders = orders.filter(
                            (order) => order._id !== id
                        );
                        setOrders(remainingOrders);
                    }
                });
        }
    };
    return (
        <div>
            <h2 className="my-4">
                <span className="text-danger">{user.displayName}'s</span>{" "}
                <span className="text-success">order</span>
            </h2>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: "25px" }}>
                                Food
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
                                        style={{
                                            width: "300px",
                                            padding: "0px",
                                        }}
                                        alt={order.name}
                                    />
                                </TableCell>
                                <TableCell
                                    style={{ fontSize: "1em" }}
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
