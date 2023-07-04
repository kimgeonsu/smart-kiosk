import React from "react";
import Image from "next/image";

const MinusButton = ({ handleMinusClick, drink }) => {
    const handleClick = () => {
      handleMinusClick(drink);
    };
  
    return (
      <button onClick={handleClick}>
        <Image width={10} height={10} src="/asset/minus.svg" />
      </button>
    );
  };  
  
export default MinusButton;