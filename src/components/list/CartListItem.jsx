import React, { useEffect } from "react";
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

const CartListItem = (props) => {
  // localStorage에서 데이터 가져오기
  // const savedData = JSON.parse(localStorage.getItem("menuData"));
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("menuData"));
    console.log(result);
  }, [])
  // 저장된 데이터를 표시할 변수
  let drinkName = "아메리카노";
  let touchCount = 0;
  let drinkPrice = 0;

  // localStorage에 데이터가 있는 경우 변수에 저장된 데이터 할당
  /*if (savedData) {
    drinkName = savedData.name;
    touchCount = savedData.touchCount;
    drinkPrice = savedData.price;
 
  }*/

  return (
    <>
      <div className="wrapper">
        <div className="nameContainer"> <text>{drinkName}</text></div>
        <ButtonContainer>
          <text>개</text>
        </ButtonContainer>
        <div className="nameContainer"> <text>10000원</text></div>
      </div>

      <style jsx>{`
                .wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  height: 18px;
                  border-bottom: 1px solid #CACACA;
                  padding: 16px;
                  width: 100%;
                }

                hr {
                    width: 100%;
                    color: #CACACA;
                }
                
                .nameContainer {
                  display: flex;
                  align-items: center;
                  gap: 16px;
                }
                .text {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 32px;
                    letter-spacing: 0px;
                    text-align: left;
              }
            `}</style>
    </>
  );
}

export default CartListItem;
