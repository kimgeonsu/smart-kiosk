import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
padding: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex;
border: 1px solid #000;
width: 240px;
height: 242px;
transition: border-color 0.3s, background-color 0.3s;

&.clicked {
    border: 3px solid #72a3ff;
    background-color: rgba(114, 163, 255, 0.3);
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

const AskingListItem = (props) => {
  const { drink, selectedMenu, setSelectedMenu } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

        let names = selectedMenu.map((e) => e.name);
        let idx = names.indexOf(drink.name);
        if (idx === -1) {
          const dataToSave = {
            name: drink.name,
            price: drink.price,
            quantity: 1,
          };
          setSelectedMenu([dataToSave, ...selectedMenu]);
        } else {
          const updateArr = selectedMenu.map((item) => {
            if (item.name === drink.name) {
              return { ...item, quantity: selectedMenu[idx].quantity + 1 };
            }
            return item;
          });

          if (!isClicked) {
            setSelectedMenu(updateArr);
           
          } else {
            const filteredArr = updateArr.filter((item) => item.name !== drink.name);
            setSelectedMenu(filteredArr);
          } 
        }
      
  };

  const handlePutInCart = () => {
    let names = selectedMenu.map((e) => e.name);
    let idx = names.indexOf(drink.name);
    if (idx === -1) {
      const dataToSave = {
        name: drink.name,
        price: drink.price,
        quantity: 1,
      };
      setSelectedMenu([dataToSave, ...selectedMenu]);
    } else {
      const updateArr = selectedMenu.map((item) => {
        if (item.name === drink.name) {
          return { ...item, quantity: selectedMenu[idx].quantity + 1 };
        }
        return item;
      });
      setSelectedMenu(updateArr);
     
    }
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <>
          <Wrapper className={isClicked ? "clicked" : ""} onClick={handleClick}>
        <div className="imgcontainer">
          <Image width={150} height={150} alt="음료" src={drink.image} />
        </div>
        <hr />
        <div className="infcontainer">
          <div className="name">{drink.name}</div>
          <div className="price">{drink.price.toLocaleString()}원</div>
        </div>
        </Wrapper>
      <style jsx>{`
        .wrapper {
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex;
          border: 1px solid #000;
          width: 200px;
          height: 202px;
        }

        .wrapper.clicked {
          border-color: #72a3ff;
          background-color: rgba(114, 163, 255, 0.3);
        }

        hr {
          margin-top: -8px;
          width: 100%;
          color: #cacaca;
        }

        .imgcontainer {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index:-1;
        }

        .name {
          margin-top: -6px;
          font-size: 14px;
          font-weight: 800;
        }
        .price {
          margin-top: 6px;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .infcontainer {
          text-align: left;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default AskingListItem;