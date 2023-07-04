import React from "react";
import Image from "next/image";

const DeleteButton = ({ handleDeleteClick, drink }) => {
    const handleClick = () => {
      handleDeleteClick(drink);
    };
  
    return (
      <button onClick={handleClick}>
        <Image width={12} height={12} src="/asset/deleteall.svg" />
      </button>
    );
  };  
  
export default DeleteButton;