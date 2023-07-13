import Image from 'next/image';
import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from "styled-components";
const Button = styled.button`
  border: 1px solid #72A3FF;
  width: 243px;
  height: 236px;
  margin-top: 16px;
  transition: border-color 0.3s, background-color 0.3s;

  :hover {
    border: 3px solid #72a3ff;
    background-color: rgba(114, 163, 255, 0.3);
  }
`;

const selectWhere = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handlePage = (where) => {
    setIsClicked(!isClicked);
    router.push("/selectMenu");
    localStorage.setItem('where', where);
    console.log(where);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/WaitingPage"); // 페이지를 변경할 URL로 변경해주세요
    }, 15000); // 15초를 밀리초 단위로 설정

    return () => clearTimeout(timeout); 
  }, [])

  return (
    <>
      <div className="wrapper">
        <h1>어디서 드시나요?</h1>
        <div className="buttonWrapper">
          <Button onClick={() => handlePage('here')}>
            <Image width={120} height={103} src='/assets/seatInHere.svg' alt='eatHere' />
            <div>
              <span className="highlight">매장</span>
              <span className="btn-text">에서 먹고 갈게요</span>
            </div>
          </Button>
          <Button onClick={() => handlePage('togo')}>
            <div>
              <Image width={120} height={110} src='/assets/takeout.svg' alt='togo' />
              <div>
                <span className="highlight">포장</span>
                <span className="btn-text">해서 가져갈게요</span>
              </div>
            </div>
          </Button>
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

        button {
          border: 1px solid #72A3FF;
          width: 243px;
          height:236px;
          margin-top:16px;
          transition: border-color 0.3s, background-color 0.3s;
          
        }

        button:hover {
          border: 3px solid #72a3ff;
          background-color: rgba(114, 163, 255, 0.3);
        }


        .highlight {
          color : #72A3FF;
          font-size: 20px;
          font-weight: bolder;
        
        }

        .btn-text {
          font-size: 20px;
          font-weight: bolder;
        }
      `}</style>
    </>
  );
}

export default selectWhere;