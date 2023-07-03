import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 223px;
  height: 216px;
  border: none;
  background: #FFFFFF;
  cursor: pointer;
  transition: border 0.1s ease-in-out; 
  &:hover {
    border: 3px solid #72A3FF;
  }
`;

function Button(props) {
  const { svgfile, href } = props;

  return (
    <StyledButton>{svgfile}</StyledButton>
  );
}

export default Button;

