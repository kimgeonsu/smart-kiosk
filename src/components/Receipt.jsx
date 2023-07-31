import React from "react";
import styled from "styled-components";

const ReceiptContainer = styled.div`
  width: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dashed = styled.hr`
  border: none;
  border-top: 2px dashed black;
  width: 100%;
`;

const Text = styled.text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.div`
  font-size: 16px;
`;

const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
`;

const Receipt = ({ items, totalPrice }) => {
  return (
    <ReceiptContainer>
      <Title>영수증</Title>
      <Dashed />
      <TextContainer>  <ItemName>주문번호: 1</ItemName><ItemName>포장여부: O</ItemName></TextContainer>
      <Dashed />
      <TextContainer>     
    <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 음료명</div>
     <div style={{ flex: 0.9, fontSize: 16, color: '#000000' }}> 수량</div>
     <div style={{ flex: 0.3, fontSize: 16, color: '#000000' }}> 가격</div>
     </TextContainer>
   
    <TextContainer>     
       <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 아메리카노</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 1</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 4000원</div>
    </TextContainer>
    <TextContainer>     
       <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 카페라떼</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 1</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 40000원</div>
    </TextContainer>
    <TextContainer>     
       <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 수박주스</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 1</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 40000원</div>
    </TextContainer> <TextContainer>     
       <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 망고스무디</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 1</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 40000원</div>
    </TextContainer>
    <TextContainer>     
       <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 요거트스무디</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 1</div>
       <div style={{ flex: 0.5, fontSize: 16, color: '#000000' }}> 40000원</div>
    </TextContainer>

   
      <Dashed />
      <TextContainer><div></div><ItemPrice>총합 20000원</ItemPrice> </TextContainer>
      <Dashed />
      <ItemName>wifi 이름 : ssu-fi </ItemName>   <ItemName>wifi 암호 : 20230902 </ItemName>
    </ReceiptContainer>
  );
};

export default Receipt;
