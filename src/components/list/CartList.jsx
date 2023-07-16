import React from "react";
import styled from "styled-components";
import CartListItem from "./CartListItem";

const Wrapper = styled.div`
width:100%;
  margin-top: 8px;
  gap: 16px;
`;

const CartList=(props)=> {
  const { drinks} = props;



  return (
    <Wrapper>

   <CartListItem/>
    </Wrapper>
  );
}

export default CartList;