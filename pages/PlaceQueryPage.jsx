import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styled, { keyframes } from "styled-components";
import Image from 'next/image';
import takeoutSvg from '../public/takeout.svg';
import seatSvg from '../public/seat.svg';
import SquareButton from './SquareButton';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    /* transform: translateY(10px); */
  }
  to {
    opacity: 1;
    /* transform: translateY(0); */
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${fadeInAnimation} 1s ease-in forwards;
`;

const TextContainer = styled.div`
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
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
    }, 150000000); // 15초 이내에 버튼을 클릭하지 않으면 홈 화면으로 자동으로 돌아가도록 설정

    return () => {
      clearTimeout(timeout);
      clearTimeout(clickTimeout);
    };
  }, []);

  const handleNextPage = () => {
    router.push("/selectingmenu");
  };

  return (
    // <Wrapper>
    //   <TextContainer>
    //     <h1>어디서 드시나요?</h1>
    //   </TextContainer>
    //   {showComponents && (
    //     <ButtonContainer>
    //       <SquareButton onClick={handleNextPage} svgfile={<Image src={seatSvg} alt="Seat" />} />
    //       <SquareButton onClick={handleNextPage} svgfile={<Image src={takeoutSvg} alt="Takeout" />} />
    //     </ButtonContainer>
    //   )}
    // </Wrapper>
    <>
      <div className="wrapper">
        <h1>어디서 드시나요?</h1>
        <div className="buttonWrapper">
          <SquareButton onClick={handleNextPage} svgfile={<Image src={seatSvg} alt="Seat" />} />
          <SquareButton onClick={handleNextPage} svgfile={<Image src={takeoutSvg} alt="Takeout" />} />
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 1180px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .buttonWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </>
  );
}

export default PlaceQuery;
