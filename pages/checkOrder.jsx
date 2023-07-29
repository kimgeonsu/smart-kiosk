import React, { useState, useEffect, useContext } from "react";
import Image from 'next/image';
import styled from "styled-components";
import OrderList from '../src/components/list/OrderList';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



const Container = styled.div`
    width: 100%;

  
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const Textcontainer=styled.div`
  display: flex;
  justify-content: center;

`;


const checkOrder=()=>{

  const [orders, setOrders] = useState([]);

//서버에서 주문서 목록  받아오기

useEffect(() => {
  fetch("http://127.0.0.1:5001/getOrderList") // Corrected endpoint URL
    .then((response) => response.json())
    .then((orders) => {
      setOrders(orders);
      console.log(orders);
    })
    .catch((error) => {
      console.error("하하 실패다!", error);
    });
}, []);

 return(
  <Wrapper>
    <Textcontainer>
    <h1 style={{ textAlign: "center" }}>&lt;주문목록&gt;</h1>
    </Textcontainer>
    <Container>
    <OrderList orders={orders}    onClickItem={orders} />
    </Container>
  </Wrapper>
 );

}

export default checkOrder;