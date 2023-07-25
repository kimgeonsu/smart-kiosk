import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const OrderListItem = ({ order }) => {
    return (
      <div>
        <p>Order: {order.item}</p>
        <p>Quantity: {order.quantity}</p>
        <hr />
      </div>
    );
  };
  
  export default OrderListItem;
  