import React, { useState, useEffect } from "react";
import useAuth from "./../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://morning-harbor-17755.herokuapp.com/allOrders`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    console.log(orders);
    return (
        <div>
            <h2 className="my-4"><span className="text-danger">Total</span> <span className="text-success">Orders</span></h2>
            <h5><span className="text-secondary">order count:</span> <span className="text-danger">({orders.length})</span></h5>
            <hr/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontSize: '25px', textAlign: 'center'}}>Food</TableCell>
                            <TableCell align="right" sx={{fontSize: '25px'}}>Client</TableCell>
                            <TableCell align="right" sx={{fontSize: '25px'}}>Food Name</TableCell>
                            <TableCell align="right" sx={{fontSize: '25px'}}>Phone</TableCell>
                            <TableCell align="right" sx={{fontSize: '25px'}}>E-mail</TableCell>
                            <TableCell align="right" sx={{fontSize: '25px'}}>Price</TableCell>
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
                                    <img src={order.picture} style={{width:'300px'}} alt={order.name}/>
                                </TableCell>
                                <TableCell style={{fontSize: '1.5em', color: 'chocolate'}} align="right">
                                    {order.name}
                                </TableCell>
                                <TableCell style={{fontSize: '1.5em'}} align="right">
                                    {order.foodName}
                                </TableCell>
                                <TableCell style={{fontSize: '1em'}} align="right">
                                    {order.phone}
                                </TableCell>
                                <TableCell style={{fontSize: '1em'}} align="right">
                                    {order.email}
                                </TableCell>
                                <TableCell style={{fontSize: '1em'}} align="right">
                                    ${order.price}
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
