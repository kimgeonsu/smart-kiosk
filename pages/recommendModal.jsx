import React, { useEffect, useState } from "react";
import Image from 'next/image';
import MenuList from "../src/components/list/MenuList";
import menu from "../src/data/menu.json";
import AskingList from "../src/components/list/AskingList";
import RecommendList from "../src/components/list/RecommendList";

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
          <AskingList drinks={menu.smoothie}></AskingList>
        </div>
        <div className="miniwrapper">
        <button className="yes-btn">장바구니 추가</button>
        <button className="no-btn" onClick={onClose}>취소</button>
        </div>
        <div className="underContainer">추천메뉴
        
        <RecommendList drinks={menu.coffee}></RecommendList>
        </div>
      </div>
      </div>
     
      <style jsx>{`
    
      .modalBackground{
      position: fixed;
      wrap: wrap;
      width: 100%;
      height: 1180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(128, 128, 128,0.5);
      backdrop-filter: blur(2px);
    }
        .wrapper {
          position: fixed;
          top: 12%;
          left: 8%;
          width: 84%;
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

        .underContainer {
          position: fixed;
          bottom:11%;  
          flex-direction: column;
          display: flex;
          justify-content: flex;
          padding:4px;
          font-size: 20px;
          font-weight: 600;
        }


        .queryContainer {
          
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding 10px;
          color: #000000;
          font-size: 25px;
          font-weight: bolder;
        }

        .yes-btn { 
          width: 344px;
          height: 55px;
          background-color: #72A3FF;
          color: #FFF;
          font-size: 20px;
          font-weight: 600;
          border: none;
        }

        .no-btn {
          border: 0;
          background-color: transparent;
          padding: 11px 3px;
          border: 1px solid #000;
          font-weight: 600;
          color: #5A5A5A;
          background-color: #D7D7D7;
          font-size: 20px;
          width: 102px;
          height: 55px;
          border: none;
          margin-left: 16px;
        }

        .miniwrapper{
          display: flex;
          flex-direction: row;
          justify-content: center;
          width:100%;
          padding:16px;
      }
      `}</style>
    </>
  );
};

export default RecommendModal;
