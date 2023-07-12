import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const SpeechToText = ({ children }) => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const timeoutRef = useRef(null);
  const [isOk, setIsOk] = useState(true); // GPT한테 답을 듣기 전에 또 요청을 보내는 것을 방지
  const [isEnd, setIsEnd] = useState(true); // 인공지능이 말하는 것이 끝났는지 확인

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
    SpeechRecognition.startListening({ continuous: true, language: 'ko' })
  }, []);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    // 말이 끝났을 때
    timeoutRef.current = setTimeout(() => {
      if (transcript.length > 0 && isOk) {
        setIsOk(false);

        axios.post('http://localhost:5001/kiosk/order', { data: transcript })
          .then((response) => {
            setIsOk(true);

            // 추천 문구일 때
            if (response['data']['type'] == 'recommend') {
              // 서버에서 받은 데이터 재생하기
              const decodedData = atob(response['data']['data']);
              const byteArray = new Uint8Array(decodedData.length);
              for (let i = 0; i < decodedData.length; i++) {
                byteArray[i] = decodedData.charCodeAt(i);
              }
              const blob = new Blob([byteArray], { type: 'audio/mp3' });
              const audio = new Audio();
              audio.src = URL.createObjectURL(blob);
              audio.play();
              setIsEnd(false);

              // 오디오 재생 끝나면 알려주~
              audio.addEventListener('ended', () => {
                console.log("재생 완료!");
                setIsEnd(true);
              });
            }
          })
      }

      resetTranscript();
    }, 2000);

    console.log(transcript);

    return () => clearTimeout(timeoutRef.current);
  }, [transcript]);

  // 인공지능이 말하는 거는 듣지마 너는 내 말만 들어!!!!
  useEffect(() => {
    if (!isEnd) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true, language: 'ko' });
    }
  }, [isEnd]);

  return (
    <>
      {children}
    </>
  );
};
export default SpeechToText;