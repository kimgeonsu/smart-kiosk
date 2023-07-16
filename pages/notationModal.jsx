import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  gap:16px;

`;
const Hr=styled.div`
    width: 100%;
    color: #cacaca;
  `


const CloseButton = styled.button`
    display: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    width: 300px;
    height: 65px;
    background-color: #72A3FF;
    border: none;
    cursor: pointer;
  
`;

const Text = styled.text`
    margin-top:8px;
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: bolder;
    width: 100%;
    border-bottom: 1px solid #cccccc;
  
`;



const Modal = ({ onClose }) => {


    
  return (
    <ModalOverlay>
      <ModalContent>
        
          <Text>결제 완료</Text>

    
          <p>주문해주셔서 감사합니다.</p>
        
        
          <CloseButton onClick={onClose}>확인</CloseButton>
    
        {/* 추가 내용 */}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;