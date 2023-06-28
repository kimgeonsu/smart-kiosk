import React from 'react';
import '../styles/globals.css';
import WaitingPage from './WaitingPage';
import PlaceQueryPage from './PlaceQueryPage';
import { useRouter } from 'next/router';
import SelectingMenuPage from './SelectingMenuPage';
const MyApp = ({ Component, pageProps }) => {

  return <SelectingMenuPage {...pageProps} />;
}

export default MyApp;
