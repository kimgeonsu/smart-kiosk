import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

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


  return (
    <>
      <div className="wrapper">
        <Image></Image>
        <div className="nameContainer"> <text>음료명</text></div>
    
          <text>개</text>
    
   
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
