import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { io } from 'socket.io-client';

const SpeechToText = ({ children }) => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const timeoutRef = useRef(null);

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
        // const socket = io('http://localhost:5001');
        // socket.on('speechtotext', (data) => {
        //   console.log("speechtotext", data);
        // })
        axios.post('http://localhost:5001/kiosk/order', { data: transcript })
          .then((response) => {
            console.log(response)
          })
      }

      resetTranscript();
    }, 2000);

    console.log(transcript);

    return () => clearTimeout(timeoutRef.current);
  }, [transcript]);

  return (
    <>
      {children}
    </>
  );
};
export default SpeechToText;