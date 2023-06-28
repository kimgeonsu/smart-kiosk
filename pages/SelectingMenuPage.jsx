import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import BackSvg from '../public/asset/back.svg';
import BubbleSvg from '../public/asset/speechbubble.svg';
import MenuList from "../scr/components/list/MenuList";
import TypeButton from "../scr/components/ui/TypeButton";
import PayStartButton from "../scr/components/ui/PayStartButton";
import CartList from "../scr/components/list/CartList";
import data1 from "../scr/data/data1.json";
import data2 from "../scr/data/data2.json";

const Wrapper = styled.div`
  
`;

const UpperBar = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding: 24px;
  position: relative;
`;

const StyledButton = styled.div`
  width: 18px;
  height: 36px;
  position: absolute;
  left: 42px;
  border: none
`;

const BackButton = () => (
  <Image src={BackSvg} alt="Back Button" width={18} height={36} />
);

const TextContainer = styled.text`
  font-family: "SF Pro Text", sans-serif;
  font-size: 25px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  color: #000000;
`;

const ButtonContainer = styled.div` 
  border-top: 1px solid #CACACA;
  padding: 16px 0px;
  margin-left: 64px;
  margin-right: 64px;
  margin-top: 8px;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ;
  height: 18px;
  border-bottom: 1px solid #CACACA;
  padding: 16px;
  width: 70%;
`;

const CartContainer = styled.div`
  align-items: flex-start;
  margin-left: 64px;
  margin-right: 64px;
  margin-top: 8px;
  border: 1px;
  display: flex;
  justify-content: space-between;
`;

const GrayText = styled.text`
  font-family: SF Pro Text;
  font-size: 12px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #666666;
`;

const ChangingText = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
`;

const SumTextContainer = styled.div`
  margin-right: 0;
`;

const BlueText = styled.text`
  font-size: 20px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: right;
  color : #367CFF;
`;

const PayStarting = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Selectingmenu = () => {
  const [menuData, setMenuData] = useState([]);

  const handleTypeButtonClick = (type) => {
    setMenuData([]);
    let newData;
    if (type === "커피") {
      newData = data1;
    } else if (type === "차") {
      newData = data2;
    }
    setMenuData(newData);
  
  };

  useEffect(() => {
    setMenuData(data1);
  }, []);

  return (
    <Wrapper>
      <UpperBar>
        <StyledButton>
          <BackButton />
        </StyledButton>
        <TextContainer>주문하기</TextContainer>
      </UpperBar>

      <BubbleContainer>
        <Image src={BubbleSvg} alt="BubbleSvg" />
      </BubbleContainer>

      <ButtonContainer>
        <TypeButton type="커피" onClick={() => handleTypeButtonClick("커피")} />
        <TypeButton type="차" onClick={() => handleTypeButtonClick("차")} />
        <TypeButton type="스무디" />
        <TypeButton type="주스" />
      </ButtonContainer>

      <MenuList drinks={menuData} />

      <CartContainer>
        <BarContainer>
          <GrayText>주문내역</GrayText>
          <ChangingText>
            <GrayText>수량</GrayText>
            <SumTextContainer>
              <BlueText>15,000</BlueText>
              <GrayText>원</GrayText>
            </SumTextContainer>
          </ChangingText>
        </BarContainer>
        <PayStarting>
          <PayStartButton payment="결제하기" width={223} height={99} />
        </PayStarting>
      </CartContainer>
    </Wrapper>
  );
};

export default Selectingmenu;
