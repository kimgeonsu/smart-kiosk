import React from "react";
import styled from "styled-components";
import { ReactComponent as Espresso } from '../../asset/espresso.svg';
import { ReactComponent as DeleteSvg } from '../../asset/delete.svg'

const Wrapper = styled.div`
    padding:8px;
    margin-left: 64px;
    width: 702px;
    height: 144px;
    margin-top: 8px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    gap : 0px 132px;
`;

const NameContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 16px;
`;

const Image = styled.text`
    width: 120.46540832519531px;
    height: 122px
`;

const Text = styled.text`

font-family: SF Pro Text;
font-size: 20px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0px;
text-align: left;

`;

const ButtonContainer = styled.div`

`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

function PayDrinkListItem(props) {

    return (
        <Wrapper>
            <NameContainer>
                <Image><Espresso /></Image>
                <Text>아메리카노</Text>
            </NameContainer>
            <ButtonContainer>
                <Text>1개</Text>

            </ButtonContainer>
            <NameContainer>
                <Text>4,000원</Text>
                <DeleteButton>
                    <DeleteSvg />
                </DeleteButton>
            </NameContainer>
        </Wrapper>
    );



}

export default PayDrinkListItem;
