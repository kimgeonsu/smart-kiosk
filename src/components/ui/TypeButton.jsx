import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
width: 102px;
height: 48px;
border: 1px solid #000000;
font-family: SF Pro Text;
font-size: 16px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0px;
text-align: center;
background: white;
cursor: pointer;
transition: background-color 0.3s;

&:clicked {
  background-color: #666666;
  color: #ffffff;
  border: none;
}

margin-right: 16px;
`;


function TypeButton(props){
    const {type, onClick} = props;

    return <StyledButton onClick={onClick}>{type}</StyledButton>;

}

export default TypeButton;