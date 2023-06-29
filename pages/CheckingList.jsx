import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import BackSvg from '../public/asset/back.svg';
import PayStartButton from "../scr/components/ui/PayStartButton";
import PayDrinkList from "../scr/components/list/PayDrinkList";
import data1 from "../scr/data/data1.json";
import data2 from "../scr/data/data2.json";

const Wrapper = styled.div`
  
`;

const UpperBar = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const StyledButton = styled.button`
  width: 18px;
  height: 36px;
  position: absolute;
  left: 42px;
  border: none
`;

const BackButton = () => (
  <Image src={BackSvg} alt="Back Button" width={18} height={36} />
);

const TextContainer = styled.div`
  font-family: "SF Pro Text", sans-serif;
  font-size: 25px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  color: #000000;
  
`;

const PayStarting = styled.button`
position: absolute;
top: 1055px;
left: 63px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

function CheckingList(){
    
    
    const handlePreviousPage = () => {
      
      };

    return (
        <Wrapper>
          <UpperBar>
          <StyledButton>
          <BackButton />
        </StyledButton>
          <TextContainer>주문 내역</TextContainer>
          </UpperBar>

          <PayDrinkList/>
          
          <PayStarting>
            <PayStartButton payment="결제하기" onClick={handlePreviousPage} width={703} height={99} />
          </PayStarting>
        </Wrapper>
      );

}

export default CheckingList;
