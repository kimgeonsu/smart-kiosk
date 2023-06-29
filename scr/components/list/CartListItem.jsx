import React from "react";
import styled from "styled-components";
import DeleteSvg from "../../../public/asset/delete.svg";

const Wrapper = styled.div`
  padding: 8px;
  margin-left: 64px;
  margin-top: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0px 132px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Text = styled.text`
  font-family: SF Pro Text;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
`;

const ButtonContainer = styled.div``;

const CartListItem=(props)=> {
  // localStorage에서 데이터 가져오기
  const savedData = JSON.parse(localStorage.getItem("menuData"));

  // 저장된 데이터를 표시할 변수
  let drinkName = "";
  let touchCount = 0;
  let drinkPrice = 0;

  // localStorage에 데이터가 있는 경우 변수에 저장된 데이터 할당
  if (savedData) {
    drinkName = savedData.name;
    touchCount = savedData.touchCount;
    drinkPrice = savedData.price;
 
  }

  return (
    <Wrapper>
      <NameContainer>
        <Text>아메리카노</Text>
      </NameContainer>
      <ButtonContainer>
        <Text>개</Text>
      </ButtonContainer>
      <NameContainer>
        <Text>원</Text>
        <DeleteSvg />
      </NameContainer>
    </Wrapper>
  );
}

export default CartListItem;
