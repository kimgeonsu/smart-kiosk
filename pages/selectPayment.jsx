import { Howl } from 'howler';
import Image from 'next/image';
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import { GptContext } from '../src/context/gptContext';
import styled from "styled-components";
import NotationModal from "./notationModal"
import axios from 'axios';

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
  const { answer, setAnswer } = useContext(GptContext);

  const openModal = () => {
    setModalOpen(true);
    refreshGPT();

    localStorage.setItem('totalPrice', JSON.stringify(0));
    localStorage.setItem('order', JSON.stringify([]));
 
    setTimeout(() => {
      router.push("/"); 
    }, 5000); 

  };
  
  const refreshGPT=()=>{
      axios.post('http://localhost:5001/kiosk/paying', { paying: true }) 
    .then((response) => {
      console.log("결제 완료, gpt 초기화바람", response.data); 
    })
    .catch((error) => {
      console.error('땡떙떙실패:', error);
    });
  }

  const closeModal = () => {
    setModalOpen(false);
    router.push("/");
  };
  // 포장 여부에 포장이 들어가면 다음 페이지로 고고

  useEffect(() => {
    console.log(answer);
    if (answer !== null) {
      if (answer["type"] == 'payment') {
      if (answer.data == '카드')  {openModal('카드'); return;}
      if (answer.data == '숭실페이')  {openModal('숭실페이'); return;}
      }
    }
  }, [answer]);

  const handleClick = (which) => {
    setIsClicked(!isClicked);

    localStorage.setItem('totalPrice', JSON.stringify(0));
    localStorage.setItem('order', JSON.stringify([]));

    if (which == "soongsilpay") {
      openModal();
    }
    if (which == "card") {
      openModal();
    }

    const timeout = setTimeout(() => {
      router.push("/"); 
    }, 5000); // 15초를 밀리초 단위로 설정


  };

  const handlePreviousPage = () => {
    router.push("/selectMenu");
  };

  useEffect(() => {
      let sound = new Howl({
     src: ['/assets/payment.mp3'], 
     html5: true
     });
      sound.play();
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
          height: 1100px;
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