import React, { use, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import MenuList from "../src/components/list/MenuList";
import menu from "../src/data/menu.json";
import PlusButton from "../src/components/ui/PlusButton";
import MinusButton from "../src/components/ui/MinusButton";
import DeleteButton from "../src/components/ui/DeleteButton";
import RecommendModal from "./recommendModal"; 
import sentence from "../src/data/inducementsentence.json";
import axios from "axios";

const Selectingmenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState("");
  const router = useRouter();
  /*useEffect(() => {
    const listenForSignal = async () => {
      try {
        const response = await axios.get("http://localhost:5000/kiosk/recommend");
        const data = response.data;

        if (data.signal === "openModal") {
          setModalOpen(true);
        }
      } catch (error) {
        console.error("서버 통신 중 에러 발생:", error);
      }
    };
    listenForSignal();
  }, []);
  */
   
  //5초마다 추천 문구 바뀜
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentence.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      setCurrentSentence(sentence[currentSentenceIndex].sentence);
    }, [currentSentenceIndex]);

  //음료 TYPE 버튼 동작
  const handleTypeButtonClick = (type) => {
    setMenuData([]);
    let newData;
    if (type === "커피") {
      newData = menu.coffee;
    } else if (type === "차") {
      newData = menu.tea;
    }
    else if (type === "스무디") {
      newData = menu.smoothie;
    }
    else if (type === "주스") {
      newData = menu.juice;
    }
    setMenuData(newData);

  };

  useEffect(() => {
    setMenuData(menu.coffee);
  }, []);

  /*useEffect(() => {
    const existingselectedMenu = JSON.parse(localStorage.getItem("totalPrice")) || 0;
    console.log(selectedMenu);
  }, [selectedMenu])
*/
useEffect(() => {
  const existingOrder = JSON.parse(localStorage.getItem("order")) || [];
  setSelectedMenu(existingOrder instanceof Array ? existingOrder : []);
  console.log("메뉴판 눌렀을때 저장~", existingOrder);
}, []);


  //장바구니 금액 총합 계산
  useEffect(() => {
    //const existingTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
    const totalPrice = selectedMenu.reduce(
      (sum, item) => sum + item.price * item.quantity ,  0);
      setTotalPrice(totalPrice);
    console.log("셀렉트메뉴가 문제니?",totalPrice);
  }, [selectedMenu]);

// 장바구니 내역 저장
  const saveOrder = () => {
    if(totalPrice){
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    localStorage.setItem('order', JSON.stringify(selectedMenu));
   //총가격 저장 부분 삭제함
    router.push("/checkingList");
    console.log("가격 저장은 어케되니",totalPrice);
    console.log("메뉴 저장은 어케되니",selectedMenu);
    }
    console.log("메뉴를 클릭해주세요",selectedMenu);
  }

  const handlePreviousPage = () => {
    localStorage.setItem('totalPrice', JSON.stringify(0));
    localStorage.setItem('order', JSON.stringify([]));
    router.push("/selectWhere");
  };

  //음료 수량 - 1
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
      return updatedMenu.filter(Boolean); // null 값을 제거하여 새로운 배열 반환
    });
  };
  
  //장바구니에서 삭제
  const handleDeleteClick = (drink) => {
    setSelectedMenu((prevMenu) => {
      const updatedMenu = prevMenu.filter((item) => item.name !== drink); //해당 음료 이름 필터링
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
      return updatedMenu;
    });
  };
////나중에 비동기 작업으로 모달창 열 예정,, 일단 버튼으로 열수 있도록 닮
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
     <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <RecommendModal setModalOpen={setModalOpen} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} closeModal={closeModal} />}
      <div className="wrapper">
        <div className="upperBar">
          <Image width={16} height={32} src='/asset/back.svg'  alt= "이미지" onClick={handlePreviousPage} />
          <h1>주문하기</h1>
          <div></div>
        </div>

        <div className="contentWrapper">
          <div className="imgContainer">
            
            <Image width={13} height={26} src='/asset/prev.svg' alt= "이미지" />
          </div>

          <div className="content">
        
          <div className="speechBubbleContainer" >
            <Image width={671} height={55} src="/asset/speechbubble.svg" alt= "이미지"/>
          <div className="personImageContainer">
          <div className="personImage">
            <Image  width={44} height={36} src="/asset/person.svg" alt= "이미지" />
         <div className="inducesentenceContainer">{currentSentence}</div>
        </div>
    </div>
  </div>
            <hr />

            <div className="categoryWrapper">
              <button onClick={() => handleTypeButtonClick("커피")}>커피</button>
              <button onClick={() => handleTypeButtonClick("차")}>차</button>
              <button onClick={() => handleTypeButtonClick("스무디")}>스무디</button>
              <button onClick={() => handleTypeButtonClick("주스")}>주스</button>
            </div>
            <MenuList selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drinks={menuData} />
          </div>

          <div className="imgContainer">
          <Image style={{ rotate: '180deg', zIndex: -1 }} width={13} height={26} src='/asset/prev.svg' alt= "이미지" />

          </div>

        </div>
        <div className="payContent">
          <div className="cart-wrapper">
            <div className="pay-top">
              <div style={{ flex: 3, fontSize: 16, color:'#666666',fontWeight: 'bolder' }}>주문내역</div>
              <div style={{ flex: 1, fontSize: 16, color:'#666666',fontWeight: 'bolder'  }}>수량</div>
              <div style={{ flex: 1.5, fontSize: 25, color: '#367cff', fontWeight: 'bolder' }}>
                {totalPrice.toLocaleString()}원
              </div>

            </div>
            <div className="cart-list">
              
              {
                selectedMenu.map((item) =>
                  <div className="cart-item">
                    <div style={{ flex: 3, fontSize: 16, color:'#000000',fontWeight: 'bolder'  }}>{item.name}</div>
                    <div style={{ flex: 1.5, fontSize: 16, color:'#000000',fontWeight: 'bolder'  }}>
                       <MinusButton handleMinusClick={() => handleMinusClick(item.name)} drink={item.name} />
                         {item.quantity}개
                       <PlusButton handlePlusClick={handlePlusClick} drink={item.name}/>
                    </div>
                    <div style={{ flex: 1.2 , fontSize: 16, color:'#000000',fontWeight: 'bolder' }}>   {`${(item.price * item.quantity).toLocaleString()}원`}</div>
                      <DeleteButton handleDeleteClick={()=>handleDeleteClick(item.name)} drink={item.name}/>
                  </div>
                )
              }
            </div>
          </div>
          <button onClick={() => saveOrder(totalPrice)} className="pay-btn">결제 하기</button>

        </div>
      </div>
      
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

        button {
          border: 0;
          background-color: transparent;
          padding: 11px 3px;
          border: 1px solid #000;
          font-weight: bolder;
          font-size: 16px;
          width: 102px;
          height: 48px;
          border: 1px solid #000000;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #666666;
            color: #ffffff;
            border: none;
          }

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
          width: 671px;
          display: flex;
          justify-content: space-between;
        }

        .pay-top {
          
          display: flex;
          width: 100%;
          border-bottom: 1px solid #CACACA;
        }

        .cart-list {
          width:100%;
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
          width: 321px;
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
            display: flex;
          }

        .PayStarting{
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .contentWrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .speechBubbleContainer {
            position: relative;
            justify-content: center;
            align-items: center;
            z-index: -1;
          }

        .personImageContainer {
          position: absolute;
          align-items: column;
          top: 10px;
          left: 100px;
          z-index: 1;
        }

       .inducesentenceContainer {
          font-size: 17px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: 0px;
          color: #FFFFFF;
          justify-content: center;
          align-items: center;
          position: relative;
          bottom: 31px;
          left: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 385px;
      }

      `}</style>
    </>
  );
};

export default Selectingmenu;