import React from "react";
import Image from "next/image";

const PlusButton = ({ handlePlusClick, drink }) => {
    const handleClick = () => {
      handlePlusClick(drink);
    };
  
    return (
      <button onClick={handleClick}>
        <Image width={10} height={10} src="/asset/plus.svg" />
      </button>
    );
  };  
  
export default PlusButton;