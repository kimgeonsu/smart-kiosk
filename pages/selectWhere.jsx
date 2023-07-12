import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const selectWhere = () => {
  const router = useRouter();

  const handlePage = (where) => {
    router.push("/SelectingMenuPage");
    localStorage.setItem('where', where);
    console.log(where);
  };

  useEffect(() => {
  }, [])

  return (
    <>
      <div className="wrapper">
        <h1>어디서 드시나요?</h1>
        <div className="buttonWrapper">
          <button onClick={() => handlePage('here')}>
            <Image width={200} height={200} src='/assets/seatInHere.svg' alt='eatHere' />
            <div>
              <span className="highlight">매장</span>
              <span className="btn-text">에서 먹고 갈게요</span>
            </div>
          </button>
          <button onClick={() => handlePage('togo')}>
            <div>
              <Image width={200} height={200} src='/assets/takeout.svg' alt='togo' />
              <div>
                <span className="highlight">포장</span>
                <span className="btn-text">해서 가져갈게요</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 1180px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .buttonWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }

        button {
          border: 1px solid #000;
          padding: 20px;
        }

        .highlight {
          color : #72A3FF;
          font-size: 32px;
          font-weight: bolder;
        }

        .btn-text {
          font-size: 32px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default selectWhere;