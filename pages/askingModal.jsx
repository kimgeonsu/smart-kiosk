import React, { useEffect, useState } from "react";
import Image from 'next/image';
import menu from "../src/data/menu.json";
import AskingList from "../src/components/list/AskingList";
import RecommendList from "../src/components/list/RecommendList";

const AskingModal = ({
  setSelectedMenu,
  selectedMenu,
  closeModal,
  isChecked,
  setIsChecked,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("모달에서 선택한 음료 모음", selectedMenu);
    console.log("삭제할 음료 모음", isChecked);
  }, [selectedMenu]);

  const handleCloseModal = () => {
    // 모달 창이 닫힐 때 선택한 메뉴를 전달하고 closeModal 함수 호출
    closeModal(selectedMenu);
  };

  //모달 내에 selectedMenu 추가 될 때마다 이거
  useEffect(() => {
    const totalPrice = selectedMenu.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
    console.log("모달 버튼 누르는 게 문제인가??", totalPrice);
  }, [selectedMenu]);

  const saveOrder = () => {
    localStorage.setItem("order", JSON.stringify(selectedMenu));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    console.log("모달 저장하는 게 문제인가", totalPrice);
    closeModal();
  };
  
  const handleCancelClick = () => {
    // 모달 창이 닫힐 때 선택한 음료를 장바구니에서 제거
    const updatedMenu = selectedMenu.map((item) => {
      const isCheckedItem = isChecked.find((checkedItem) => checkedItem.name === item.name);
      if (isCheckedItem) {
        // 이미 선택된 음료이면 수량을 -1 감소시킴
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  
    setSelectedMenu(updatedMenu);
    setIsChecked([]);
    closeModal();
  };
  

  return (
    <>
      <div className="modalBackground">
        <div className="wrapper">
          <div className="upperBar">
            <Image
              width={32}
              height={32}
              src="/asset/delete.svg"
              alt="deny"
              onClick={handleCancelClick}
            />
          </div>
          <div className="queryContainer">
            말씀하신 메뉴가 맞으신가요?
            <AskingList
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              drinks={menu.smoothie}
            ></AskingList>
          </div>
          <div className="miniwrapper">
            <button className="yes-btn" onClick={() => saveOrder()}>
              장바구니 추가
            </button>
            <button className="no-btn" onClick={handleCancelClick}>
              취소
            </button>
          </div>
          <div className="underContainer">
            추천메뉴
            <RecommendList
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              drinks={menu.coffee}
            ></RecommendList>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modalBackground {
          position: fixed;
          wrap: wrap;
          width: 100%;
          height: 1180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgba(128, 128, 128, 0.5);
          backdrop-filter: blur(2px);
        }
        .wrapper {
          position: fixed;
          top: 10%;
          left: 8%;
          right: 8%;
          width: 84%;
          height: 81%;
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
          flex-direction: column;
          display: flex;
          justify-content: flex;
          font-size: 20px;
          font-weight: 600;
          position: relative;
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
          background-color: #72a3ff;
          color: #fff;
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
          color: #5a5a5a;
          background-color: #d7d7d7;
          font-size: 20px;
          width: 102px;
          height: 55px;
          border: none;
          margin-left: 16px;
        }

        .miniwrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          padding: 16px;
        }

      
      `}</style>
    </>
  );
};

export default AskingModal;
