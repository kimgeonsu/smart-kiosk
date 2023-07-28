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
    sendOrderToServer();
    refreshSound();

    const timeout =setTimeout(() => {
      router.push("/"); 
    }, 5000);

    return () => {
      clearInterval(timeout);
    };

  };
  const where = JSON.parse(localStorage.getItem('where'));
  const storedTotalPrice = JSON.parse(localStorage.getItem('totalPrice'));
  const selectedMenu = JSON.parse(localStorage.getItem('order'));

  const sendOrderToServer = async () => {
    console.log("????"); 
    try {
      console.log("???????????????/"); 
      // selectedMenu 배열에서 주문 정보 추출
      const which = where !== "" ? where : item.packaging;
      console.log("두두두둥",which);
      const orderDataArray = selectedMenu.map((item) => ({
        packaging: which,
        product_name: item.name,
        quantity: item.quantity,
        temperature: item.temperature,
        total_amount: storedTotalPrice, 
      }
      ));
      console.log(orderDataArray); 

    // 서버에 post 요청 보내기
    const response = await axios.post('/selectPayment', { data: orderDataArray });
    
      console.log(response.data); // 서버로부터의 응답을 확인
    } catch (error) {
      console.error(error);
       
    }
    localStorage.setItem('totalPrice', JSON.stringify(0));
    localStorage.setItem('order', JSON.stringify([]));
    localStorage.setItem('where', JSON.stringify([]));
    console.error("끝~");
  };
  
  const refreshSound=()=>{
    let sound = new Howl({
      src: ['/assets/finish.mp3'],
      html5: true
    });

    sound.play();
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

    if (which == "soongsilpay") {
      openModal();
    }
    if (which == "card") {
      openModal();
    }

    const timeout = setTimeout(() => {
      router.push("/"); 
    }, 5000); // 15초를 밀리초 단위로 설정

     return () => clearTimeout(timeout);
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