import { Howl } from 'howler';
import Image from 'next/image';
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import { GptContext } from '../src/context/gptContext';
import styled from "styled-components";
import NotationModal from "./notationModal"

const Button = styled.button`
  border: 6px solid #72A3FF;
  width: 243px;
  height: 236px;
  margin-top: 16px;
  transition: border-color 0.3s, background-color 0.3s;

  :hover {
    border: 3px solid #72a3ff;
    background-color: rgba(114, 163, 255, 0.3);
  }
`;

const selectPayment = () => {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    router.push("/");
  };
  // 포장 여부에 포장이 들어가면 다음 페이지로 고고



  const handleClick = (which) => {
    setIsClicked(!isClicked);
    if (which == "soongsilpay") {
      openModal();
    }
    if (which == "card") {
      openModal();
    }

  };

  const handlePreviousPage = () => {

    router.push("/selectMenu");
  };

  useEffect(() => {
    //  let sound = new Howl({
    // src: ['/assets/어쩌구.mp3'], 결제 방식을 선택해주세요 음성 넣어야해요
    // html5: true
    // });

    //  sound.play();

  }, [])

  return (
    <>
      {isModalOpen && <NotationModal onClose={closeModal} />}

      <div className="wrapper">
        <div className="upperBar">
          <Image width={16} height={32} src='/asset/back.svg' alt="이미지" onClick={handlePreviousPage} />

        </div>
        <h1>결제 방식을 선택해주세요</h1>
        <div className="buttonWrapper">
          <button onClick={() => handleClick('card')}>
            <Image width={120} height={103} src='/assets/card.svg' alt='card' />
            <div>
              <span className="highlight">카드</span>
            </div>
          </button>
          <button onClick={() => handleClick('soongsilpay')}>
            <div>
              <Image width={120} height={110} src='/assets/cash.svg' alt='cash' />
              <div>
                <span className="highlight">숭실페이</span>

              </div>
            </div>
          </button>
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
        .upperBar {
          position: absolute;
          top: 0;
          left: 0;
          padding: 48px;
          display: flex;
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
          height: 236px;
          margin-top: 16px;
          transition: border-color 0.3s, background-color 0.3s;


          
        }

        button:hover {
          border: 3px solid #72a3ff;
          background-color: rgba(114, 163, 255, 0.3);
        }


        .highlight {
          color : #000;
          font-size: 30px;
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

export default selectPayment;