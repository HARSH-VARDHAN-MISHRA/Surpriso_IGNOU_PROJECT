import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllOrder = () => {
    const [order, setOrder] = useState([])
    const token = sessionStorage.getItem("token");
    const getAllorder = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/checkout", {
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                },
            })
            console.log(res)
            if (res.status === 200) {
                const newData = res.data.data
                setOrder(newData.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllorder()
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Orders</h4>
                </div>
                <div className="links">
                    
                </div>
            </div>
            <section className="dis-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Payment Mode</th>
                            <th scope="col">Payment Status</th>
                            <th scope="col">Total</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((item, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item._id}</td>
                                    <td>{item.orderstatus}</td>
                                    <td>{item.paymentmode}</td>
                                    <td>{item.paymentstatus}</td>
                                    <td>&#8377;{item.total}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <Link className="bt edit" to={`/edit-order/${item._id}`}>
                                            Update <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllOrder;
