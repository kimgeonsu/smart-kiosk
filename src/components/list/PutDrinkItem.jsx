import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #72A3FF;
`;

const Name = styled.text`
    font-size: 27px;
    font-weight: 600;
    
`;

const Name2 = styled.text`
    font-size: 27px;
    font-weight: 600;
    margin-left:auto;

`;

const Text = styled.text`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    padding:10px;
    border-bottom: 3px solid #72A3FF;
`;

const PutDrinkItem=(props)=> {
    const { drink } = props;
    return (
        <Wrapper>
            <Name>{drink.name2}</Name>
            <Name2>2잔</Name2>
            <div></div>
        </Wrapper>
    );
}

export default PutDrinkItem;