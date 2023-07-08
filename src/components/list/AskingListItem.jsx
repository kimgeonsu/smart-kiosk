import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
    /* width: 223px; */
    height: 240px;
    border : 1px solid #000000;
`;

const ImageContainer = styled.div`
    width: 162px;
    height: 163px;
    border-bottom: 1px solid #CACACA;
    width: 191px;
    margin-top: 1px;
    margin-left: 16px;
`;

const AskingListItem = (props) => {
    const { drink, selectedMenu, setSelectedMenu } = props;

    const handleClick = () => {
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
            setSelectedMenu(updateArr);
        }
    };

    return (
        <>
            <div className="wrapper" onClick={handleClick}>
               <div className="imgcontainer">
                <Image width={150} height={150} alt="음료" src={drink.image} />
                </div>
                <hr />
            <div className="infcontainer">
                <div className="name">{drink.name}</div>
                <div className="price">{(drink.price).toLocaleString()}원</div>
            </div>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex;
                    border: 1px solid #000;
                    width: 220px;
                    height: 222px;
                }

                hr {
                    margin-top:-8px;
                    width: 100%;
                    color: #CACACA;
                }
                
                .imgcontainer{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .name {
                    margin-top:-6px;
                    font-size: 14px;
                    font-weight: 800;
                }
                .price {
                    margin-top:6px;
                    font-size: 17px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                }
                .infcontainer{
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </>
    );
}

export default AskingListItem;
