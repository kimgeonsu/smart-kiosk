import OrderListItem from './OrderListItem';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map((order, index) => (
        <OrderListItem key={index} order={order} />
      ))}
    </div>
  );
};

export default OrderList;