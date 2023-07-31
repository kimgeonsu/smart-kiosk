import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Receipt from '../Receipt';

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  background: white;
  padding: 16px;
  border: 1px solid lightgrey;
  transition: background 0.2s;
  margin-bottom: 8px;
 

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;


const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding:16px;
`;

const OrderInfo = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-top: 16px;
`;

const OrderListItem = ({ order, onClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={handleClick}>
  
    <h2>주문 번호: 1</h2>
   
   
    {!isOpen && <hr />} 
   <Container>    
    <OrderInfo isOpen={isOpen}>
      <p>주문 시간: {order.quantity}</p>
 
      <p>포장 여부: {order.packaging}</p>
    </OrderInfo>
  
    <OrderInfo isOpen={isOpen}>
    <TextContainer>
      <text>{order.item}</text>
      <text>x  {order.quantity}개</text>
    </TextContainer>
 
    <TextContainer>
      <text>{order.item}</text>
      <text>x  {order.quantity}개</text>
    </TextContainer>
  
    <TextContainer>
      <text>{order.item}</text>
      <text>x  {order.quantity}개</text>
    </TextContainer>

    <TextContainer>
      <text>{order.item}</text>
      <text>x  {order.quantity}개</text>
    </TextContainer>
  
    <TextContainer>
      <text>{order.item}</text>
      <text>x  {order.quantity}개</text>
    </TextContainer>
    </OrderInfo>
    <OrderInfo isOpen={isOpen}>
    <Receipt/>
    </OrderInfo>
    </Container>
  </Wrapper>
  );
};

export default OrderListItem;
