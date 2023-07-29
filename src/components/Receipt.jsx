import React,{useRef} from "react";

const Receipt = ({ item,  printRef }) => {


  const handlePrint=()=>{
    window.print();
  };

  return (
    <>
    <div  ref={printRef} onClick={handlePrint} className="wrapper">
     <span className="title">영수증</span>
      <hr/>
      <div className="textcontainer">  
        <sapn className="nametext">주문번호:{item.order_number}</sapn>
        <sapn className="nametext">포장여부:  {(() => {
          if (item.packaging === "store"){
            return "X";
          } else {
            return "O";
          }
        })()}
        </sapn>
  </div>
      <hr />
      <div className="textcontainer">     
    <div style={{ flex: 1.1, fontSize: 16, color: '#000000' }}> 음료명</div>
     <div style={{ flex: 0.9, fontSize: 16, color: '#000000' }}> 수량</div>
     <div style={{ flex: 0.3, fontSize: 16, color: '#000000' }}> 가격</div>
     </div>
   
     {item.items.map((itemData, index) => (
        <div className="textcontainer" key={index}>
          <div style={{ flex: 1.1, fontSize: 16, color: "#000000" }}>
            {itemData.product_name}
          </div>
          <div style={{ flex: 0.5, fontSize: 16, color: "#000000" }}>
            {itemData.quantity}
          </div>
          <div style={{ flex: 0.5, fontSize: 16, color: "#000000" }}>
            {itemData.price}원
          </div>
        </div>
      ))}

      <hr />
      <div className="textcontainer2"> 
     <sapn className="pricetext"><div></div><sapn className="pricetext">총합 {item.total_price}원</sapn> </sapn>
     </div>
      <hr />
      <sapn className="nametext">wifi 이름 : ssu-fi </sapn><div></div>   <sapn className="nametext">wifi 암호 : 20230902 </sapn>
    </div>
    <style jsx>{`
        .wrapper {
            width: 300px;
            background-color: #fff;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
            padding: 16px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        hr {
            border: none;
          border-top: 2px dashed black;
          width: 100%;
        }
        .contentWrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        .nametext {
            font-size: 16px;
        }
        .pricetext {
            font-size: 16px;
            font-weight: bold;
        }
        .textcontainer{
            display: flex;
            justify-content: space-between;
        }
        .textcontainer2{
            display: flex;
            justify-content: right;
        }

    `}</style>
    </>
    
  );
};

export default Receipt;
