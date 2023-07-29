import React, { useState, useRef } from "react";
import styled from "styled-components";
import Receipt from '../Receipt';
import ReactToPrint from "react-to-print";

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

const OrderListItem = ({ key, order, onClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const componentRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="wrapper">
  
    <h2  onClick={handleClick}>주문 번호: {order.order_number}</h2>
   
   
   <div className="container" >    
    <OrderInfo  onClick={handleClick} isOpen={isOpen} >
      <p>{order.time}</p>
      <p>포장 여부: {order.packaging}</p>
      
    </OrderInfo>
  
    <OrderInfo onClick={handleClick} isOpen={isOpen}>
          {order.items.map((item, index) => (
            <TextContainer key={index}>
              <text> {(() => {
          if (item.temperature === "Hot") {
            return "따뜻한";
          } else {
            return "시원한";
          }
        })()}</text>
              <text>⠀</text>
              <text>{item.product_name}</text>
              <text>⠀</text>
              <text>{item.quantity}개</text>
            </TextContainer>
          ))}
    </OrderInfo>
      
    <OrderInfo  isOpen={isOpen}>
  
    <ReactToPrint
        trigger={() => <button>영수증 출력</button>}
        content={() => componentRef.current}
    />
         {isOpen && <Receipt printRef={componentRef} item={order} />}
    </OrderInfo>
    </div>
  </div>
  <style jsx>{`
        .wrapper {
          width: 100%;
          cursor: pointer;
          background: white;
          padding: 16px;
          border: 1px solid lightgrey;
          margin-bottom: 8px;
 
        }

        .container {
          display: flex;
          justify-content: space-between;
        }
        .textcontainer {
          display: flex;
          justify-content: space-between;
          padding:16px;
        }

        button {
          border: 1px solid #6666;
          
          margin-top:16px;
          transition: border-color 0.3s, background-color 0.3s;
          
        }

        .btn-text {
          font-size: 20px;
          font-weight: bolder;
        }
 
      `}</style>
  </>
  );
};

export default OrderListItem;