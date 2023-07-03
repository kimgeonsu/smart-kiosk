import React from "react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    height: 745px;
`;

const MenuList = (props) => {
  const { drinks, onClickItem } = props;

  if (!Array.isArray(drinks) || drinks.length === 0) {
    return null; // Return null or display an alternative content if drinks is not a valid array
  }

  return (
    <Wrapper>
      {drinks.map((drink, index) => {
        return <MenuListItem key={drink.name} drink={drink} />;
      })}
    </Wrapper>
  );
}

export default MenuList;