import React, { use, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import MenuList from "../src/components/list/MenuList";
import menu from "../src/data/menu.json";

const Selectingmenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTypeButtonClick = (type) => {
    setMenuData([]);
    let newData;
    if (type === "커피") {
      newData = menu.coffee;
    } else if (type === "차") {
      newData = menu.tea;
    }
    else if (type === "스무디") {
      newData = menu.smoothie;
    }
    else if (type === "주스") {
      newData = menu.juice;
    }
    setMenuData(newData);

  };

  useEffect(() => {
    setMenuData(menu.coffee);
  }, []);

  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu])

  useEffect(() => {
    const totalPrice = selectedMenu.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    console.log(totalPrice);
  }, [selectedMenu]);


  const saveOrder = () => {
    localStorage.setItem('order', JSON.stringify(selectedMenu));
  }

  return (
    <>
      <div className="wrapper">
        <div className="upperBar">
          <Image width={16} height={32} src='/asset/back.svg' />
          <h1>주문하기</h1>
          <div></div>
        </div>

        <div className="contentWrapper">
          <div className="imgContainer">
            <Image width={13} height={26} src='/asset/prev.svg' />
          </div>

          <div className="content">
            <Image width={671} height={55} src='/asset/speechbubble.svg' />
            <hr />

            <div className="categoryWrapper">
              <button onClick={() => handleTypeButtonClick("커피")}>커피</button>
              <button onClick={() => handleTypeButtonClick("차")}>차</button>
              <button onClick={() => handleTypeButtonClick("스무디")}>스무디</button>
              <button onClick={() => handleTypeButtonClick("주스")}>주스</button>

            </div>

            <MenuList selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drinks={menuData} />

          </div>

          <div className="imgContainer">
            <Image style={{ rotate: '180deg' }} width={13} height={26} src='/asset/prev.svg' />
          </div>
        </div>
        <div className="payContent">
          <div className="cart-wrapper">
            <div className="pay-top">
              <div style={{ flex: 3 }}>주문내역</div>
              <div style={{ flex: 0.8 }}>수량</div>
              <div style={{ flex: 1, fontSize: 24, color: '#367cff', fontWeight: 'bolder' }}>
                {selectedMenu.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}원
              </div>

            </div>
            <div className="cart-list">
              {
                selectedMenu.map((item) =>
                  <div className="cart-item">
                    <div style={{ flex: 3 }}>{item.name}</div>
                    <div style={{ flex: 0.8 }}>{item.quantity}</div>
                    <div style={{ flex: 1 }}>{item.price * item.quantity}</div>
                  </div>
                )
              }
            </div>
          </div>
          <button onClick={saveOrder} className="pay-btn">결제 하기</button>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          padding: 40px 30px;
          width: 100%;
          height: 1180px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .upperBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        hr {
          width: 671px;
          margin-top: 24px;
        }

        .contentWrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .content {
        }

        .categoryWrapper {
          margin-top: 24px;
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }

        button {
          border: 0;
          background-color: transparent;
          padding: 11px 3px;
          border: 1px solid #000;
          font-weight: bolder;
          font-size: 16px;
          width: 102px;
          height: 48px;
          border: 1px solid #000000;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #666666;
            color: #ffffff;
            border: none;
          }

        }

        .imgContainer {
          display: flex;
          align-items: center;
          padding: 16px;
        }

        .barContainer{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 18px;
          border-bottom: 1px solid #CACACA;
          padding: 16px;
          width: 100%;
        }

        .cartlistContainer{
          
          width: 100%;
          align-items: column;
        }
        
        .payContent{
          margin-left:32px;
          margin-top: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .pay-top {
          display: flex;
          width: 100%;
          border-bottom: 1px solid #CACACA;
        }

        .cart-list {
          max-height: 69px;
          overflow-y: scroll;
        }

        .cart-item {
          display: flex;
          width: 100%;
        }

        .cart-wrapper {
          width: 100%;
        }

        .pay-btn {
          margin-right:32px;
          width: 223px;
          height: 99px;
          background-color: #72A3FF;
          color: #FFF;
          font-size: 20px;
          font-weight: 600;
          border: none;
        }

        .GrayText{
          font-family: SF Pro Text;
          font-size: 12px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: left;
          color: #666666;
        }
        .ChangingText{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 64px;
        }

        .SumTextContainer{
            margin-right: 0;
        }

        .BlueText{
            font-size: 20px;
            font-weight: 800;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: right;
            color : #367CFF;
          }

        .PayStarting{
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
      `}</style>
    </>
  );
};

export default Selectingmenu;
