import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import menu from "../src/data/menu.json";
import MinusButton from "../src/components/ui/MinusButton";
import DeleteButton2 from "../src/components/ui/DeleteButton2";
import PlusButton from "../src/components/ui/PlusButton";

const CheckingList=()=>{
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [sumPrice, setSumPrice] = useState([]);
  useEffect(() => {
    const order = localStorage.getItem('order');
    if (order) {
      const parsedOrder = JSON.parse(order);
      console.log(parsedOrder);
       setSelectedMenu(parsedOrder);
    }

    else console.log("데이터 없음");
  }, []);

  useEffect(() => {
    const totalPrice = localStorage.getItem('totalPrice');
    if (totalPrice) {
      const parsedPrice = JSON.parse(totalPrice);
      console.log(parsedPrice);
       setSumPrice(parsedPrice);
    }

    else console.log("데이터 없음");
  }, []);

  const router = useRouter();
 
  const handlePage = () => {
    router.push("/checkingList");
  };
  
  const handlePreviousPage = () => {
      
  };

  const handleMinusClick = (drink) => {
   
  };
  
  //카트에서 삭제
  const handleDeleteClick = (drink) => {
    
  };
  
//수량 +1
  const handlePlusClick = (drink) => {
   
  };

  const getOrder = () => {
    const order = localStorage.getItem('order');
    if (order) {
      const parsedOrder = JSON.parse(order);
      // 가져온 주문 내역 활용하기
      console.log(parsedOrder);
      // 또는 state에 저장할 수도 있습니다.
       setSelectedMenu(parsedOrder);
    }

    else console.log("데이터 없음");
  }

    return (
      <>
        <div className="wrapper">
        <div className="upperBar">
          <Image width={16} height={32} src='/asset/back.svg' />
          <h1>주문내역</h1>
          <div></div>
        </div>

      
        <div className="cart-list">
        {selectedMenu.map((item) => {
            const menuArray = Object.values(menu);
            const menuItem = menuArray.find((menuItem) => menuItem.name === item.name);
            const imageUrl=menuItem?.image;
            return (
                  <div className="cart-item" key={item.id}>
                     <div className="image">
                  <Image width={128} height={128} src={"/assets/camomile.png"} alt={item.name} />
                </div>
                    <div style={{ flex: 2, fontSize: 20, color:'#666666',fontWeight: 'bolder'  }}>{item.name}</div>
                    <div style={{ flex: 1, fontSize: 17, color:'#666666',fontWeight: 'bolder'  }}> 
                                <MinusButton handleMinusClick={() => handleMinusClick(item.name)} drink={item.name} />
                                   {item.quantity}개
                                <PlusButton handlePlusClick={handlePlusClick} drink={item.name}/>
                    </div>
                    <div style={{ flex: 1 , fontSize: 20, color:'#000000',fontWeight: 'bolder' }}>{item.price * item.quantity}원</div>
                      <DeleteButton2 handleDeleteClick={()=>handleDeleteClick(item.name)} drink={item.name}/>
                  </div>
                );
              })}
          </div>
          <div className="paycontainer">
          <div className="sumContent">
          <div style={{ fontSize: 20, color:'#666666',fontWeight: 'bolder'  }}>{"총 결제금액"}</div>
                  
          </div>
          <button className="pay-btn"> 결제하기 </button>
          </div>
        <style jsx>{`
        .wrapper {
          padding: 40px 40px;
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

        .image {
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
          padding:16px;
          width: 100%;
        }

        .cartlistContainer{
          
          width: 100%;
          align-items: column;
        }
        
        .sumContent{
          display: flex;
          justify-content: flex-end;
        }

        .pay-top {
          display: flex;
          width: 100%;
          border-bottom: 1px solid #CACACA;
        }

        .cart-list {
          max-height: 75%;
          width: 702px;
          overflow-y: scroll;
          overflow-x: hidden;
        }

        .cart-item {
          display: flex;
          justify-content: center;
          align-items: center;
        
          height: 144px;
          border: 1px solid #000000;
          margin: 16px;
        }
       
        .paycontainer{
          position: absolute;
          bottom: 0;
          width: 90%;
          margin: 0 0 8px;
          padding: 16px;
        }

        .pay-btn {
          width: 100%;
          height: 99px;
          background-color: #72A3FF;
          color: #FFF;
          font-size: 20px;
          font-weight: 600;
          border: none;
          justify-content: center;
        }

        .BlueText{
            font-size: 20px;
            font-weight: 800;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: right;
            color : #367CFF;
          }       
      `}</style>
      </div>
      </>
      );

}

export default CheckingList;
