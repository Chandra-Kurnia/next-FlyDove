/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import {Fragment} from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';

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
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
