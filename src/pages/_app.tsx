import { NextPage } from "next";
import type { AppProps } from "next/app";
import "normalize.css";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import "scss/main.scss";
import { persistor, store } from "store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// verify the integrity of the token sent by middleware to verifyToken route api
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
    ? (page: ReactElement) => (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {Component.getLayout && (
              <>
                <ToastContainer />
                {Component.getLayout(page)}
              </>
            )}
          </PersistGate>
        </Provider>
      )
    : (page: ReactElement) => (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ToastContainer />
            {page}
          </PersistGate>
        </Provider>
      );

  return getLayout(<Component {...pageProps} />);
}
