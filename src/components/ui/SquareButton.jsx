import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 223px;
  height: 216px;
  border: 1px solid;
  background: #FFFFFF;
  cursor: pointer;
`;

function Button(props) {
  const { svgfile, href } = props;

  return (
    <Link href={href}>
      <StyledButton>{svgfile}</StyledButton>
    </Link>
  );
}

export default Button;

