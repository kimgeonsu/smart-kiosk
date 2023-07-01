import React from "react";
import styled from "styled-components";
import PayDrinkListItem from "./PayDrinkListItem";

const Wrapper = styled.div`
margin-top: 32px;
  gap: 16px;
`;

function PayDrinkList(props) {
  const { payingdrinks, onClickItem } = props;

  return (
    <Wrapper>
        
        {drinks.map((payment, index) => {
                return <MenuListItem key={payment.name} drink={payment} />;
            })}
    </Wrapper>
  );
}

export default PayDrinkList;