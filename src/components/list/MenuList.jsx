import React from "react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(240px, auto));
    grid-gap: 16px;
`;

const MenuList = (props) => {
  const { drinks, selectedMenu, setSelectedMenu } = props;

  if (!Array.isArray(drinks) || drinks.length === 0) {
    return null; 
  }

  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <MenuListItem selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} key={drink.name} drink={drink} />;
      })}
    </Wrapper>
  );
}

export default MenuList;