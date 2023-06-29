import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeInAnimation} 1s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WaitingPage = () => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push('/placequery');
  };

  const [showWaiting, setShowWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWaiting(true);
    }, 1000); // 1초 후에 Waiting 요소를 나타내도록 설정

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Wrapper onClick={handleNextPage}>
        {showWaiting && <Image width={820} height={1180} src="/waiting.svg" alt="Waiting" />}
      </Wrapper>
    </>
  );
}

export default WaitingPage;
