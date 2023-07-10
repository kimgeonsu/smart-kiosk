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
  const [isOk, setIsOk] = useState(true);

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
      if (transcript.length > 0) {
        console.log("2 seconds");

        if (isOk) {
          setIsOk(false);
          axios.post('http://localhost:5001/kiosk/order', { data: transcript })
            .then((response) => {
              setIsOk(true);
              console.log(response['data']);
              if (response['data']['type'] == 'recommend') {
                const decodedData = atob(response['data']['data']);
                const byteArray = new Uint8Array(decodedData.length);
                for (let i = 0; i < decodedData.length; i++) {
                  byteArray[i] = decodedData.charCodeAt(i);
                }
                const blob = new Blob([byteArray], { type: 'audio/mp3' });
                const audio = new Audio();
                audio.src = URL.createObjectURL(blob);
                audio.muted = true;
                audio.play();
                // audio.muted = false;
              } else {

              }
            })
        }
      }

      resetTranscript();
    }, 2000);

    console.log(transcript);

    return () => clearTimeout(timeoutRef.current);
  }, [transcript]);

  return (
    <>
      <button>dd</button>
      {children}
    </>
  );
};
export default SpeechToText;