import React from "react";
import Image from "next/image";

const PlusButton = ({ handlePlusClick, drink }) => {
    const handleClick = () => {
      handlePlusClick(drink);
    };
  
    return (
      <button onClick={handleClick}>
        <Image width={15} height={15} src="/asset/plus.svg"  alt="+"  />
      </button>
    );
  };  
  
export default PlusButton;