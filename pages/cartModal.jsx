import React, { useEffect } from "react";
import styled from "styled-components";
import Image from 'next/image';
import menu from "../src/data/menu.json";
import PutDrinkList from "../src/components/list/PutDrinkList";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #FFF;
    position: fixed;
    width: 50%;
    box-shadow: 0px 0px 20px #72A3FF;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 600;
    gap:16px;
`;

const Cartlist = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding:8px;
    border-bottom: 1px solid #72A3FF;
`;

const Name = styled.text`
    font-size: 27px;
    font-weight: 600;
`;

const Text = styled.text`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    padding:10px;
    border-bottom: 3px solid #72A3FF;
    background-color:#72A3FF; 
 
`;




const Modal = ({ drinks }) => {

  return (
    <ModalOverlay>
     <ModalContent>
        <Text>장바구니에 담겼습니다!</Text>
        <PutDrinkList drinks={drinks} />
     </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;