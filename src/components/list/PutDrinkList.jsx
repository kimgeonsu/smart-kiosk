import React from "react";
import styled from "styled-components";
import PutDrinkItem from "./PutDrinkItem";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex;
align-items: flex;
width: 100%;
padding:8px;
border-bottom: 1px solid #72A3FF;
`;

const Cartlist = styled.div`
   
`;

const PutDrinkList=(props)=> {
  const { drinks} = props;

  if (!Array.isArray(drinks) || drinks.length === 0) {
    return "원하는 음료를 터치해주세요"; 
  }
  const top4Drinks = drinks.slice(0, 3); 

  return (
    <Wrapper>
        
        {top4Drinks.map((drink) => {
                return <PutDrinkItem key={drink.name} drink={drink} />;
            })}
    </Wrapper>
  );
}

export default PutDrinkList;