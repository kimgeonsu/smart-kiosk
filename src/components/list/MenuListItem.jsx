import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex;
  border: 1px solid #000;
  width: 220px;
  height: 240px;
  transition: border-color 0.3s, background-color 0.3s;

  &.clicked {
    border: 2px solid #666666;
    background-color: rgba(114, 163, 255, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 162px;
  height: 163px;
  border-bottom: 1px solid #cacaca;
  width: 191px;
  margin-top: 1px;
  margin-left: 16px;
`;

const MenuListItem = (props) => {
  const { drink, selectedMenu, setSelectedMenu } = props;
  const [isClicked, setIsClicked] = useState(false);

  

  const handleClick = () => {
    setIsClicked(true);
    let names = selectedMenu.map((e) => e.id);
    let idx = names.indexOf(drink.id);
    if (idx === -1) {
      const dataToSave = {
        name: drink.name,
        id: drink.id,
        price: drink.price,
        quantity: 1,
      };
      setSelectedMenu([dataToSave, ...selectedMenu]);
    } else {
      const updateArr = selectedMenu.map((item) => {
        if (item.id === drink.id) {
          return { ...item, quantity: selectedMenu[idx]["quantity"] + 1 };
        }
        return item;
      });
      setSelectedMenu(updateArr);
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <>
      <Wrapper
        className={isClicked ? "clicked" : ""}
        onClick={handleClick}
      >
        <div className="imgcontainer">
          <Image width={150} height={150} src={drink.image} alt={drink.name} />
        </div>
        <hr />
        <div className="imfcontainer">
          <div className="name">{drink.name}</div>
          <div className="price">{drink.price.toLocaleString()}원</div>
        </div>
      </Wrapper>
      <style jsx>{`

        hr {
          width: 100%;
          color: #cacaca;
        }

        .name {
          margin-top: 6px;
          font-size: 12px;
          font-weight: 1000;
          letter-spacing: 0.01em;
        }
        .price {
          margin-top: 6px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .infcontainer {
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .imgcontainer {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default MenuListItem;
