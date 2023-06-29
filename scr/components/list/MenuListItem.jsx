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

// const Image = styled.svg`
//     width: 157px;
//     height: 159px;
//     border: none;
// `;

const NoticeTag = styled.svg`

`;


const NameText = styled.p`
    margin-left: 16px;
    margin-top: 16px;
    font-family: SF Pro Text;
    font-size: 12px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
`;

const PriceText = styled.p`
    margin-left: 16px;
    margin-top: 8px;
    font-family: SF Pro Text;
    font-size: 16px;
    font-weight: 800;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
`;

const MenuListItem = (props) => {
    const { drink, onClick } = props;
    const [touchCount, setTouchCount] = useState(0);

    const handleClick = () => {
        setTouchCount((prevCount) => prevCount + 1);
        const dataToSave = {
            name: drink.name,
            price: drink.price,
            touchCount: touchCount + 1,
        };
      
        // Example: Saving the data to localStorage
        localStorage.setItem(`menuData_${drink.name}`, JSON.stringify(dataToSave));

        console.log("Clicked Drink:", drink);
    };  

    return (
        // <Wrapper>
        //     <ImageContainer>
        //         <Image src={drink.image} alt={drink.name} />
        //         <NameText>{drink.name}</NameText>
        //         <PriceText>{drink.price}</PriceText>
        //     </ImageContainer>
        // </Wrapper>
        <>
            <div className="wrapper" onClick={handleClick}>
                <Image width={150} height={150} src={drink.image} />
                <hr />
                <div className="name">{drink.name}</div>
                <div className="price">{drink.price}원</div>
            </div>
            <style jsx>{`
                .wrapper {
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #000;
                }

                hr {
                    width: 100%;
                    color: #CACACA;
                }
                
                .name {
                    font-size: 12px;
                    font-weight: 600;
                }
                .price {
                    font-size: 16px;
                    font-weight: 800;
                }
            `}</style>
        </>
    );
}

export default MenuListItem;
