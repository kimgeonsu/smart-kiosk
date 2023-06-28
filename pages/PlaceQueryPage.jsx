import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styled, { keyframes } from "styled-components";
import Image from 'next/image';
import wheretoeatSvg from '../public/wheretoeat.svg';
import takeoutSvg from '../public/takeout.svg';
import seatSvg from '../public/seat.svg';
import SquareButton from './SquareButton';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  opacity: 0;
  animation: ${fadeInAnimation} 1s ease-in forwards;
 
`;

const TextContainer = styled.div`
  position: absolute;
  height: 51px;
  width: 233px;
  left: 298px;
  top: 438px;
  border-radius: nullpx;
  display: flex;
  position: relative; 
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  gap: 10px;
  left: 184px;
  right: 184px;
  top: 548px;
`;

const PlaceQuery = () => {
  const router = useRouter();
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponents(true);
    }, 1000); // 1초 후에 컴포넌트를 나타내도록 설정

    const clickTimeout = setTimeout(() => {
      router.push("/");
    }, 15000); // 15초 이내에 버튼을 클릭하지 않으면 홈 화면으로 자동으로 돌아가도록 설정

    return () => {
      clearTimeout(timeout);
      clearTimeout(clickTimeout);
    };
  }, []);

  const handleNextPage = () => {
    router.push("/selectingmenu");
  };

  return (
    <Wrapper>
      <TextContainer>
        <Image src={wheretoeatSvg} alt="Wheretoeat" />
      </TextContainer>
      {showComponents && (
        <ButtonContainer>
          {/* SquareButton 컴포넌트 사용 */}
          <SquareButton onClick={handleNextPage} svgfile={<Image src={seatSvg} alt="Seat" />} />
          <SquareButton onClick={handleNextPage} svgfile={<Image src={takeoutSvg} alt="Takeout" />} />
        </ButtonContainer>
      )}
    </Wrapper>
  );
}

export default PlaceQuery;
