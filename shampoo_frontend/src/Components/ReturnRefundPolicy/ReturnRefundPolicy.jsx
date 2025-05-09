import React, { useEffect } from 'react';
import './ReturnAndRefundPolicy.css';

const ReturnAndRefundPolicy = () => {
  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
},[])
  return (
    <div className="return-refund-policy-container">
      <div className="header">
        <h1>Return & Refund Policy for Surpriso</h1>
      </div>

      <div className="section">
        <h2>Introduction</h2>
        <p>
          Thank you for shopping at Surpriso. If you are not entirely satisfied with your purchase, we're here to help.
        </p>
      </div>

      <div className="section">
        <h2>Returns</h2>
        <p>
          You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
        </p>
      </div>

      <div className="section">
        <h2>Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain number of days, depending on your card issuer's policies.
        </p>
      </div>

      <div className="section">
        <h2>Shipping</h2>
        <p>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions on how to return your item to us, contact us at support@Surpriso.com.
        </p>
      </div>
    </div>
  );
};

export default ReturnAndRefundPolicy;
