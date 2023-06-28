import React from "react";
import styled from "styled-components";
import CartListItem from "./CartListItem";

const Wrapper = styled.div`
  margin-top: 8px;
  gap: 16px;
`;

function CartList(props) {
  const { drinks, onClickItem } = props;

  return (
    <Wrapper>
        
      <CartListItem/>
   
    </Wrapper>
  );
}

export default CartList;