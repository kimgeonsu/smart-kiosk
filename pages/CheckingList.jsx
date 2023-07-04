import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import menu from "../src/data/menu.json";


const CheckingList=()=>{

  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState([]);
  const handlePage = () => {
    router.push("/checkingList");
  };
  
  const handlePreviousPage = () => {
      
  };

    return (
      <>
        <div className="wrapper">
        <div className="upperBar">
          <Image width={16} height={32} src='/asset/back.svg' />
          <h1>주문내역</h1>
          <div></div>
        </div>

      -
        <div className="cart-list">
              {
                selectedMenu.map((item) =>
                  <div className="cart-item">
                    <div style={{ flex: 3, fontSize: 16, color:'#000000',fontWeight: 'bolder'  }}>{item.name}</div>
                    <div style={{ flex: 1.5, fontSize: 16, color:'#000000',fontWeight: 'bolder'  }}> <MinusButton handleMinusClick={() => handleMinusClick(item.name)} drink={item.name} />
                                               {item.quantity}개
                                               <PlusButton handlePlusClick={handlePlusClick} drink={item.name}/>
                    </div>
                    <div style={{ flex: 0.7 , fontSize: 16, color:'#000000',fontWeight: 'bolder' }}>{item.price * item.quantity}원</div>
                      <DeleteButton handleDeleteClick={()=>handleDeleteClick(item.name)} drink={item.name}/>
                  </div>
                )
              }
          </div>

        <hr />
        <style jsx>{`
        .wrapper {
          padding: 40px 30px;
          width: 100%;
          height: 1180px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .upperBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        hr {
          width: 671px;
          margin-top: 24px;
        }

        .contentWrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .content {
        }

        .categoryWrapper {
          margin-top: 24px;
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }

        .imgContainer {
          display: flex;
          align-items: center;
          padding: 16px;
        }

        .barContainer{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 18px;
          border-bottom: 1px solid #CACACA;
          padding: 16px;
          width: 100%;
        }

        .cartlistContainer{
          
          width: 100%;
          align-items: column;
        }
        
        .payContent{
          margin-left:32px;
          margin-top: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .pay-top {
          display: flex;
          width: 100%;
          border-bottom: 1px solid #CACACA;
        }

        .cart-list {
          max-height: 69px;
          overflow-y: scroll;
        }

        .cart-item {
          display: flex;
          width: 100%;
        }

        .cart-wrapper {
          width: 100%;
        }

        .pay-btn {
          margin-right:32px;
          width: 223px;
          height: 99px;
          background-color: #72A3FF;
          color: #FFF;
          font-size: 20px;
          font-weight: 600;
          border: none;
        }

        .GrayText{
          font-family: SF Pro Text;
          font-size: 12px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: left;
          color: #666666;
        }
        .ChangingText{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 64px;
        }

        .SumTextContainer{
            margin-right: 0;
        }

        .BlueText{
            font-size: 20px;
            font-weight: 800;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: right;
            color : #367CFF;
          }

        .PayStarting{
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
      `}</style>
      </div>
      </>
      );

}

export default CheckingList;
