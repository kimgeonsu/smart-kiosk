import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import io from 'socket.io-client';
import axios from 'axios';

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
  height: 1100px;
  animation: ${fadeInAnimation} 1s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WaitingPage = () => {
  const router = useRouter();
  const [showWaiting, setShowWaiting] = useState(false);

  const handleNextPage = () => {
    router.push('/selectWhere');
  };

  useEffect(() => {
    // Socket.IO 클라이언트 초기화
    const socket = io('http://localhost:5001'); // 서버 주소에 맞게 변경

    socket.on('connect', () => {
      
      axios.post('http://localhost:5001/kiosk/waiting', { waiting: true }) // API 엔드포인트에 맞게 변경
        .then((response) => {
          console.log("응답했다잉", response.data); // 응답 확인
        })
        .catch((error) => {
          console.error('실패~~~~~~~~~~~~~~~~~~~~:', error);
        });
    });

    socket.on('isPerson', (data) => {
      // 사람 감지 이벤트 수신
      console.log("정보왔잉", data);
      if (data.event === 'person_detected') {
        handleNextPage();
        // 감지된 사람 정보를 받아서 화면 조작
        const personDetails = data.details; // 의미 없음
      }
    });

    // 컴포넌트 언마운트 시 Socket.IO 클라이언트 연결 해제
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <Wrapper>
        {<Image width={820} height={1180} src="/waiting.svg" alt="Waiting" />}
      </Wrapper>
    </>
  );
}

export default WaitingPage;