import React from "react";
import styled from "styled-components";
import RecommendListItem from "./RecommendListItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, minmax(120px, auto));
  grid-gap: 16px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const RecommendList = (props) => {
  const { drinks } = props;

  if (!Array.isArray(drinks) || drinks.length === 0) {
    return null; // Return null or display an alternative content if drinks is not a valid array
  }

  const top4Drinks = drinks.slice(0, 4); // Get the top 4 drinks from the array

  return (
    <Wrapper>
      {top4Drinks.map((drink, index) => {
        return <RecommendListItem key={drink.name} drink={drink} />;
      })}
    </Wrapper>
  );
};

export default RecommendList;