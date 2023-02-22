import React from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import {store} from "../app/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
