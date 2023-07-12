import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #666666;
    width: 155px;
    height: 155px;
    
      &.clicked {
          border: 3px solid #72a3ff;
          background-color: rgba(114, 163, 255, 0.3);
       }
`;

const ImageContainer = styled.div`
    width: 150px;
    height: 152px;
    border-bottom: 1px solid #CACACA;
    width: 191px;
    margin-top: 1px;
    margin-left: 16px;
`;

const RecommendListItem = (props) => {
    const { drink, selectedMenu, setSelectedMenu } = props;
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        let names = selectedMenu.map(e => e.name);
        let idx = names.indexOf(drink.name);
        if (idx == -1) {
            const dataToSave = {
                name: drink.name,
                price: drink.price,
                quantity: 1
            };
            setSelectedMenu([dataToSave, ...selectedMenu]);
        } else {
            const updateArr = selectedMenu.map(item => {
                if (item.name == drink.name) {
                    return { ...item, quantity: selectedMenu[idx]['quantity'] + 1 }
                }
                return item
            })
            if (!isClicked) {
                setSelectedMenu(updateArr);
              } else {
                const filteredArr = updateArr.filter((item) => item.name !== drink.name);
                setSelectedMenu(filteredArr);
              } 
        }
    };

    return (
        <>
            <Wrapper className={isClicked ? "clicked" : ""} onClick={handleClick}>
            <div className="imgcontainer">
                <Image width={104} height={106} zIndex={1} alt="음료" src={drink.image} />
                </div>
                <div className="miniwrapper">
                <div className="name">{drink.name}</div>
                <div className="price">{(drink.price).toLocaleString()}원</div>
                </div>
            </Wrapper>
            <style jsx>{`
                .wrapper {
                    
                    padding: 8px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #666666;
                    width: 155px;
                    height: 155px;
                    }

                .wrapper.clicked {
                    border-color: #72a3ff;
                    background-color: rgba(114, 163, 255, 0.3);
                }

                hr {
                    width: 100%;
                    color: #CACACA;
                }
                
                .name {
                    font-size: 12px;
                    font-weight: 800;

                    color: #666666;
                }
                .price {
                    font-size: 1px;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                }

                .miniwrapper{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width:100%;
                }

                .imgcontainer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index:-1;
                }
            `}</style>
        </>
    );
}

export default RecommendListItem;