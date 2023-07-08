import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


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