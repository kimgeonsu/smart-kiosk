import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import menu from "../src/data/menu.json";
import MinusButton from "../src/components/ui/MinusButton";
import DeleteButton2 from "../src/components/ui/DeleteButton2";
import PlusButton from "../src/components/ui/PlusButton";
import NotationModal from "./notationModal"

const checkingList=(props)=>{
  const {totalPrice, setTotalPrice, selectedMenu, setSelectedMenu, closeModal}=props;
  const [menuData, setMenuData] = useState([]);
 

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };



  useEffect(() => {
   if(!totalPrice){return null};
      setSelectedMenu(selectedMenu);
   
  }, []);

  useEffect(() => {

      setTotalPrice(totalPrice)


       console.log("체킹 페이지 검거!!!!!?",totalPrice);
  //  }
  }, []);

  const router = useRouter();
 
  const handlePage = () => {
    router.push("/checkingList");
  };


  const handleMinusClick = (drink) => {
      setSelectedMenu((prevMenu) => {
      const updatedMenu = prevMenu.map((item) => {
        if (item.name === drink) {
          if (item.quantity === 1) {
            // quantity가 0이 되었을 때 해당 음료를 제외하고 필터링
            return { ...item, quantity: item.quantity};
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      const totalPrice = updatedMenu.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
      );
      setTotalPrice(totalPrice);
      return updatedMenu.filter(Boolean);
    });
  };
  
  //카트에서 삭제
  const handleDeleteClick = (drink) => {
    setSelectedMenu((prevMenu) => {
      const updatedMenu = prevMenu.filter((item) => item.name !== drink);
      const totalPrice = updatedMenu.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
      );
      setTotalPrice(totalPrice);
      return updatedMenu;
    });
  };
  
  
//수량 +1
  const handlePlusClick = (drink) => {
    setSelectedMenu((prevMenu) => {
    
      const updatedMenu = prevMenu.map((item) => {
        if (item.name === drink) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      const totalPrice = updatedMenu.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
      );
      setTotalPrice(totalPrice);
      return updatedMenu.filter(Boolean);
    });
  };
//서버에 바로 보내는걸로 바꿀 예정
/*  const saveOrder = () => {
    localStorage.setItem('order', JSON.stringify(selectedMenu));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }*/

  const getMenuByName=(name)=> {
    const menuArray = Object.values(menu);

    for (const category of menuArray) {
      const menuItem = category.find((item) => item.name === name);
  
      if (menuItem) {
        return menuItem;
      }
    }
  
    return null;
  }
  

    return (
      <>
        {isModalOpen && <NotationModal onClose={closeModal} />} 
        <div className="Wrapper">
          <div className="wrapper">
        <div className="upperBar">
        <div></div>
          <h1>장바구니</h1> 
          <Image width={30} height={30} src='/asset/delete.svg' alt="이미지" onClick={closeModal} />         
        </div>

        <div className="cart-list">
        {selectedMenu.map((item) => {
          const menuItem = getMenuByName(item.name);
          const imageUrl = menuItem?.image;
            return (
              <div key={item.name} className="cart-item">
                <div className="image">
                  <Image width={128} height={128}  src={imageUrl} alt={item.name} />
                </div>
                    <div style={{ flex: 2, fontSize: 20, color:'#666666',fontWeight: 'bolder' }}>{item.name}</div>
                    <div style={{ flex: 1, fontSize: 20, color:'#666666',fontWeight: 'bolder' }}> 
                                <MinusButton handleMinusClick={() => handleMinusClick(item.name)} drink={item.name} />
                                   {item.quantity}개
                                <PlusButton handlePlusClick={handlePlusClick} drink={item.name}/>
                    </div>
                    <div style={{ flex: 1 , fontSize: 20, color:'#000000',fontWeight: 'bolder' }}>{`${(item.price * item.quantity).toLocaleString()}원`}</div>
                      <DeleteButton2 handleDeleteClick={()=>handleDeleteClick(item.name)} drink={item.name}/>
                  </div>
                );
              })}
          </div>

          <div className="paycontainer">
          <div className="sumContent">
          <div style={{ flex: 0.2, fontSize: 20, color: '#666666', fontWeight: 'bolder', marginBottom: '32px' }}>총 결제금액</div>
          <div style={{ fontSize: 30, color: '#367cff', fontWeight: 'bolder', marginTop: '-10px' }}>{totalPrice.toLocaleString()}</div>

            < div style={{ fontSize: 20, color:'#666666',fontWeight: 'bolder'  }}>원</div>    
          </div>
              <button  onClick={openModal} className="pay-btn" > 주문 완료 </button>
              </div>
          </div>

        <style jsx>{`
        .Wrapper {
          position: fixed;
          wrap: wrap;
          width: 100%;
          height: 1180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(3px);
        }
        .wrapper {
          position: fixed;
          top: 5%;
          left: 8%;
          right: 8%;
          width: 84%;
          height: 85%;
          background-color: rgb(255, 255, 255);
          border: 1px solid #72A3FF;
          border-radius: 5px;
          box-shadow: 0px 0px 20px #666;
          z-index: 999;
          display: flex;
          flex-direction: column;
        }
        .upperBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          padding: 10px;
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
          max-height: 70%;
          width: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
        }

        .cart-item {
          display: flex;
          justify-content: center;
          align-items: center;
        
          height: 144px;
          border: 1px solid #696969;
          margin: 16px;
        }
       
        .paycontainer{
          position: absolute;
          bottom: 0;
          width: 100%;
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

export default checkingList;