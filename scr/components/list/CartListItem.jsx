import React from "react";
import styled from "styled-components";

import DeleteSvg from '../../../public/asset/delete.svg'


const Wrapper = styled.div`
  padding:8px;
  margin-left: 64px;
  
  margin-top: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap : 0px 132px;
`;

const NameContainer=styled.div`
    display:flex;
    align-items: center;
    gap: 16px;
`;


const Text = styled.text`

font-family: SF Pro Text;
font-size: 20px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0px;
text-align: left;

`;

const ButtonContainer=styled.div`
 
`;



function CartListItem(props){

return(
    <Wrapper>
        <NameContainer>
     <Text>아메리카노</Text>
     </NameContainer>
    <ButtonContainer>
     <Text>1개</Text>
     </ButtonContainer>
     <NameContainer>    
     <Text>4,000원</Text>
    <DeleteSvg/>  
     </NameContainer>
    </Wrapper>
    );



}

export default CartListItem;
