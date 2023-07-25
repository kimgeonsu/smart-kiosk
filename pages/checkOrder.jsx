import React, { useState, useEffect, useContext } from "react";
import { Howl } from 'howler';
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



const checkOrder=()=>{

  const [orders, setOrders] = useState([
    { temperature: '시원한',item: '아메리카노', quantity: 2 },
    { temperature: '시원한', item: '카페라떼', quantity: 1 },
    { temperature: '시원한', item: '카페모카', quantity: 3 },
  ]);


 return(
  <Wrapper>
    <h1>주문 목록</h1>
    <Container>
    <OrderList orders={orders} />
    </Container>
  </Wrapper>
 );

}

export default checkOrder;