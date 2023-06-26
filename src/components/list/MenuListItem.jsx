import React from "react";
import styled from "styled-components";
import { ReactComponent as Espresso } from '../../asset/espresso.svg';
const Wrapper = styled.div`
    width: 223px;
    height: 240px;
    border : 1px solid #000000;
       
`;

const ImageContainer = styled.div`
width: 162px;
height: 163px;
border-bottom: 1px solid #CACACA;
width: 191px;
margin-top: 1px;
margin-left: 16px;
`;

const Image = styled.svg`
    alling:center;
    width: 157px
    height: 159px

    border: none;
    
`;

const NoticeTag =styled.svg`

`; 


const NameText = styled.p`
    margin-left: 16px;
    margin-top: 13px;
    font-family: SF Pro Text;
    font-size: 12px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
`;

const PriceText = styled.p`
    margin-left: 16px;
    margin-top: 13px;
    font-family: SF Pro Text;
    font-size: 16px;
    font-weight: 800;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
`;





function MenuListItem(props){
    const {drink, onClick}= props;
    
    return(
        <Wrapper>
            <ImageContainer> <Image><Espresso/></Image><NameText>에스프레소</NameText>
            <PriceText>4,000원</PriceText></ImageContainer>
           
        </Wrapper>
    );


}

export default MenuListItem;