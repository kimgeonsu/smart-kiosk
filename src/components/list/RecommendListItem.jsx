import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
    /* width: 223px; */
    height: 240px;
    border : 1px solid #000000;
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
                <Image width={104} height={106} alt="음료" src={drink.image} />
                <div className="miniwrapper">
                <div className="name">{drink.name}</div>
                <div className="price">{drink.price}원</div>
                </div>
            </div>
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

                hr {
                    width: 100%;
                    color: #CACACA;
                }
                
                .name {
                    font-size: 12px;
                    font-weight: 600;

                    color: #666666;
                }
                .price {
                    font-size: 12px;
                    font-weight: 800;
                }

                .miniwrapper{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width:100%;
                }
            `}</style>
        </>
    );
}

export default RecommendListItem;
