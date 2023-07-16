import React from "react";
import Image from "next/image";

const DeleteButton = ({ handleDeleteClick, drink }) => {
  const handleClick = () => {
    handleDeleteClick(drink);
  };

  return (
    <>
    <div className="wrapper">
      <button onClick={handleClick}>
        <Image width={16} height={16} src="/asset/deleteall.svg"  alt="이미지" />
      </button>
    </div>
      <style jsx>{`
                .wrapper {   
                    justify-content: center;
                    align-items: center;
                }

                
            `}</style>
    </>
  );
};

export default DeleteButton;
