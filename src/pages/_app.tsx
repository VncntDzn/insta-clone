import type { AppProps } from "next/app";
import "normalize.css";
import "scss/main.scss";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
