import React from "react";
import styled from "styled-components";
import CartListItem from "./CartListItem";

const Wrapper = styled.div`
  margin-top: 8px;
  gap: 16px;
`;

const CartList=(props)=> {
  const { drinks, onClickItem } = props;

  if (!Array.isArray(drinks) || drinks.length === 0) {
    return null; // Return null or display an alternative content if drinks is not a valid array
  }

  return (
    <Wrapper>

      {drinks.map((drinks, index) => {
        return <CartListItem key={drink.name} drink={drink} />;
      })}
    </Wrapper>
  );
}

export default CartList;