import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
    position: absolute;
    width: 448px;
    height: 346.74px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${fadeInAnimation} 1s ease-in;
`;

const Waitingforcustomer = () => {
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
      <Head>
      </Head>
      <Wrapper onClick={handleNextPage}>
        {showWaiting && <img src="/waiting.svg" alt="Waiting" />}
      </Wrapper>
    </>
  );
}

export default Waitingforcustomer;
