import React from 'react';
import '../styles/globals.css';
import WaitingPage from './WaitingPage';
import PlaceQueryPage from './PlaceQueryPage';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  // /placequery 경로로 접근 시 PlaceQueryPage를 렌더링하도록 설정
  if (pathname === '/placequery') {
    return <PlaceQueryPage {...pageProps} />;
  }

  return <WaitingPage {...pageProps} />;
}

export default MyApp;
