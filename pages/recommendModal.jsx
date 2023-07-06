import React, { useEffect, useState } from "react";
import Image from 'next/image';

const RecommendModal = ({ setModalOpen, drinks }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const onClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen || !setModalOpen) return null;

  return (
    <>
  
    <div className="modalBackground">
      <div className="wrapper">
        <div className="upperBar">
          <Image width={32} height={32} src='/asset/delete.svg' alt='deny' onClick={onClose} />
        </div>
        <div className="queryContainer">
          말씀하신 메뉴가 맞으신가요?
        </div>
      </div>
      </div>
     
      <style jsx>{`
    
      .modalBackground{
      position: fixed;
     
      width: 100%;
      height: 1180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(128, 128, 128,0.3);
      backdrop-filter: blur(2px);
    }
        .wrapper {
          position: fixed;
          top: 12%;
          left: 10%;
     
          width: 80%;
          height: 78%;
          background-color: rgb(255, 255, 255);
         
          z-index: 999;
          display: flex;
          flex-direction: column;
        }

        .upperBar {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          padding: 32px;
        }

        .queryContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #000000;
          font-size: 28px;
          font-weight: bolder;
          margin-top: 128px;
        }

        .blur {
          filter: blur(8px);
        }
      `}</style>
    </>
  );
};

export default RecommendModal;
