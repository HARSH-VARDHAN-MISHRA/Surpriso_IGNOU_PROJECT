import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const EditOrder = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem("token");
  let { _id } = useParams()
  let [data, setData] = useState({})
  let [user, setUser] = useState({})
  let [orderstatus, setOrderstatus] = useState("")
  let [paymentstatus, setPaymentstatus] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/checkout/admin/${_id}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        setData(response.data.data);
        setOrderstatus(response.data.data.orderstatus);
        setPaymentstatus(response.data.data.paymentstatus);
        const userResponse = await axios.get(`http://localhost:8080/api/user/${response.data.data.userid}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        setUser(userResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    if (_id) {
      fetchData();
    }
  }, [_id]);
  const getInputData = (e) => {
    const { name, value } = e.target
    if (name === "orderstatus") {
      setOrderstatus(value)
    }
    else
      setPaymentstatus(value)
  }
  const updateItem = async () => {
    let res = await axios.put("http://localhost:8080/api/checkout/admin/" + _id, { ...data, orderstatus: orderstatus, paymentstatus: paymentstatus }, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
    if (res.status === 200) {
      navigate("/all-orders")
    }
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mt-1">Update Order Status</h4>
            <table className='table table-bordered table-striped table-hover'>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>{data._id}</td>
                </tr>
                <tr>
                  <th>User Details</th>
                  <td>
                    <strong>Name</strong> : {user.name}
                    <br />
                    <strong>Mob No :</strong>  {user.phone} , <strong>Email :</strong>   {user.email}
                    <br />
                    <strong>Address :</strong>   {user.address}
                    <br />
                    <strong>Pin :</strong>   {user.pin} , <strong>City :</strong> {user.city} , <strong>State :</strong> {user.state}
                  </td>
                </tr>
                <tr>
                  <th>Order Status</th>
                  <td>{data.orderstatus}
                    <br />
                    {
                      data.orderstatus !== "Delivered" ?
                        <select onChange={getInputData} value={orderstatus} name="orderstatus" className='form-select mt-3'>
                          <option value="select Order Starus" disabled>Select Order status</option>
                          <option value="Order is Placed">Order is Placed</option>
                          <option value="Packed">Packed</option>
                          <option value="Ready to Ship">Ready to Ship</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Order in Transit">Order in Transit</option>
                          <option value="Order Reached to the Final Delivery Station">Order Reached to the Final Delivery Station</option>
                          <option value="Our for Delivery">Our for Delivery</option>
                          <option value="Delivered">Delivered</option>
                        </select> : ''
                    }
                  </td>
                </tr>
                <tr>
                  <th>Payment Mode</th>
                  <td>{data.paymentmode}</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>{data.paymentstatus}
                    <br />
                    {
                      data.paymentstatus !== "Success" && data.paymentstatus !== "Done" ?
                        <select onChange={getInputData} value={paymentstatus} name="paymentstatus" className='form-select mt-3'>
                          <option value="Pending">Pending</option>
                          <option value="Done">Done</option>
                        </select> : ''
                    }</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>&#8377;{data.total}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>{new Date(data.createdAt).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <th>RPPID</th>
                  <td>{data.transactionId}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    {
                      data.orderstatus !== "Delivered" || data.paymentstatus !== "Done" ?
                        <button className='btn btn-primary w-100' onClick={updateItem}>Update</button> : ""
                    }
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-responsive " style={{ marginBottom: "100px" }}>
              <table className='table table-bordered table-striped table-hover'>
                <tbody>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                  </tr>
                  {
                    data.products && data.products.map((item, index) => {
                      return <tr key={index}>
                        <td>
                          <a href={item.image} target='_blank' rel='noreferrer'>
                            <img src={item.image} height="80px" width="80px" className='rounded-1' alt="" />
                          </a>
                        </td>
                        <td>{item.productname}</td>
                        <td>{item.sizeML}ML</td>
                        <td>&#8377;{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>&#8377;{item.price * item.quantity}</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditOrder