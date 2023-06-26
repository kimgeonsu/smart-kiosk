import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  font-family: SF Pro Text;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  background: #72A3FF;
  color: white;
  border: none;
`;

function PayStartButton(props) {
  const { payment, onClick, width, height } = props;

  return (
    <StyledButton onClick={onClick} width={width} height={height}>
      {payment}
    </StyledButton>
  );
}

export default PayStartButton;

