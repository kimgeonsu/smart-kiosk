import '../styles/globals.css'
import 'regenerator-runtime/runtime';
import axios from 'axios';
import SpeechToText from '../src/components/SpeechToText';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeechToText>
        <Component {...pageProps} />
      </SpeechToText>
    </>
  );
}

export default MyApp