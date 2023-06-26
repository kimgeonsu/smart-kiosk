import React from "react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin-left: 64px;
    margin-right: 64px;
    margin-top: 16px;
`;

function MenuList(props) {
  const { drinks, onClickItem } = props;

  return (
    <Wrapper>
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
    </Wrapper>
  );
}

export default MenuList;