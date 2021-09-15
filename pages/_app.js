/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import {Fragment} from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

function MyApp({Component, pageProps}) {
  return (
    <Fragment>
      <Provider store={store}>
        <Head>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{easing: 'ease', speed: 500}}
        />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
