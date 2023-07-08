import React from "react";
import styled from "styled-components";
import AskingListItem from "./AskingListItem";

const Wrapper = styled.div`
 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(240px, auto));
  grid-gap: 16px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const AskingList = (props) => {
  const { drinks } = props;

  if (!Array.isArray(drinks) || drinks.length === 0) {
    return null; // Return null or display an alternative content if drinks is not a valid array
  }

  const top4Drinks = drinks.slice(0, 3); // Get the top 4 drinks from the array

  return (
    <Wrapper>
      {top4Drinks.map((drink, index) => {
        return <AskingListItem key={drink.name} drink={drink} />;
      })}
    </Wrapper>
  );
};

export default AskingList;
