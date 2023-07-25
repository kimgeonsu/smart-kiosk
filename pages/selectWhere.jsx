import { Howl } from 'howler';
import Image from 'next/image';
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import { GptContext } from '../src/context/gptContext';
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
  const { answer, setAnswer } = useContext(GptContext);
  const [isClicked, setIsClicked] = useState(false);

  // 포장 여부에 포장이 들어가면 다음 페이지로 고고
  useEffect(() => {
    console.log(answer);
    if (answer !== null) {
      if (answer['type'] == 'order' && answer['data'][0]['packaging'].length >= 2) {
        router.push('/selectMenu');
      } else if (answer['data'] === 'error') {
      }
    }
  }, [answer]);

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
    let sound = new Howl({
      src: ['/assets/selectwhere.mp3'],
      html5: true
    });

    sound.play();
  }, [])

  return (
    <>
      <div className="wrapper">
        <h1>어디서 드시나요?</h1>
        <div className="buttonWrapper">
          <button className='' onClick={() => handlePage('here')}>
            <Image width={120} height={103} src='/assets/seatInHere.svg' alt='eatHere' />
            <div>
              <span className="highlight">매장</span>
              <span className="btn-text">에서 먹고 갈게요</span>
            </div>
          </button>
          <button onClick={() => handlePage('togo')}>
            <div>
              <Image width={120} height={110} src='/assets/takeout.svg' alt='togo' />
              <div>
                <span className="highlight">포장</span>
                <span className="btn-text">해서 가져갈게요</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 1100px;
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