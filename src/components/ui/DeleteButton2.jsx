import React from "react";
import Image from "next/image";

const DeleteButton2 = ({ handleDeleteClick, drink }) => {
  const handleClick = () => {
    handleDeleteClick(drink);
  };

  return (
    <>
    <div className="wrapper">
      <button onClick={handleClick}>
        <Image width={15} height={15} src="/asset/delete.svg"  alt="이미지"  />
      </button>
    </div>
      <style jsx>{`
                .wrapper {   
                    padding:32px;
                    justify-content: center;
                    align-items: center;
                }

                
            `}</style>
    </>
  );
};

export default DeleteButton2;
